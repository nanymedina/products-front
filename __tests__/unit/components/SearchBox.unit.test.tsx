import { render, fireEvent } from '@testing-library/react';
import SearchBox from '@components/SearchBox';
import { useDispatchApp } from '@src/context/appContext';
import fetchProducts from '@src/actions/fetchProducts';
import resetProducts from '@src/actions/restProducts';
import { act } from 'react-dom/test-utils';

jest.mock('@src/context/appContext');
jest.mock('@src/actions/fetchProducts');
jest.mock('@@src/actions/restProducts');

describe('Search Box', () => {
  const useDispatchAppMock = useDispatchApp as jest.Mock;
  const dispatch = jest.fn();
  useDispatchAppMock.mockReturnValue(dispatch);
  const fetchProductsMock = fetchProducts as jest.Mock;
  const resetProductsMock = resetProducts as jest.Mock;

  afterEach(() => {
    useDispatchAppMock.mockClear();
    fetchProductsMock.mockClear();
    resetProductsMock.mockClear();
  });

  it('dispatch fetch product with has search', () => {
    const { getByTestId } = render(<SearchBox />);
    const searchBox = getByTestId('search-box');

    fireEvent.change(searchBox, { target: { value: 'a' } });
    fireEvent.change(searchBox, { target: { value: 'as' } });
    fireEvent.keyPress(searchBox, { key: 'Enter', code: 13, charCode: 13 });

    expect(fetchProductsMock).toHaveBeenCalledTimes(1);
    expect(resetProductsMock).not.toBeCalled();
  });

  xit('dispatch reset search with has search', () => {
    const { getByTestId } = render(<SearchBox />);
    const searchBox = getByTestId('search-box');
    act(() => {
      fireEvent.change(searchBox, { target: { value: '' } });
      fireEvent.keyPress(searchBox, { key: 'Enter', code: 13, charCode: 13 });
    });
    expect(fetchProductsMock).not.toBeCalled();
    expect(resetProductsMock).toBeCalled();
  });

  it('should show search box with placeholder', () => {
    const { getByTestId } = render(<SearchBox placeholder="placeholder" />);
    const searchBox = getByTestId('search-box');

    expect(searchBox).toMatchSnapshot();
  });

  it('should show search box without placeholder', () => {
    const { getByTestId } = render(<SearchBox />);
    const searchBox = getByTestId('search-box');

    expect(searchBox).toMatchSnapshot();
  });
});
