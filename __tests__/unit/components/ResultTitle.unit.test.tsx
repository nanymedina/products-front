import { render, screen } from '@testing-library/react';
import { useStateApp } from '@src/context/appContext';
import ResultTitle from '@components/Showcase/ResultTitle';

jest.mock('@src/context/appContext');

describe('Result Title', () => {
  const useStateAppMock = useStateApp as jest.Mock;

  afterEach(() => {
    useStateAppMock.mockClear();
  });

  it('should displays welcome message on home page', () => {
    useStateAppMock.mockReturnValue({ products: [], search: null, error: null });

    render(<ResultTitle />);

    expect(screen.getByTestId('welcome-title').textContent).toEqual('Bienvenido!!!');
    expect(screen.getByTestId('result-title')).toMatchSnapshot();
  });

  it('should displays a message with the search result', () => {
    useStateAppMock.mockReturnValue({
      products: [{ product: 'product' }],
      search: 'search',
      error: null,
    });

    render(<ResultTitle />);

    expect(screen.getByTestId('found-result').textContent).toEqual('Resultados para search:');
    expect(screen.getByTestId('result-title')).toMatchSnapshot();
  });

  it('should displays a message with no search results', () => {
    useStateAppMock.mockReturnValue({
      products: [],
      search: 'search',
      error: null,
    });

    render(<ResultTitle />);

    expect(screen.getByTestId('not-found-result').textContent).toEqual(
      'No encontramos resultados para search:'
    );
    expect(screen.getByTestId('result-title')).toMatchSnapshot();
  });

  it('should displays an error message when a search error has occurred', () => {
    useStateAppMock.mockReturnValue({
      products: [],
      search: null,
      error: 'error',
    });

    render(<ResultTitle />);

    expect(screen.getByTestId('title-error').textContent).toEqual('Ups algo salio mal!!!');
    expect(screen.getByTestId('result-title')).toMatchSnapshot();
  });
});
