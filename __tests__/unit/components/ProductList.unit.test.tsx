import { render } from '@testing-library/react';
import ProductList from '@components/ProductList';
import { useStateApp } from '@src/context/appContext';

jest.mock('@src/context/appContext');

describe('Product List', () => {
  const product = {
    id: 123,
    brand: 'brand',
    description: 'description',
    price: 20,
    oldPrice: null,
    discountRate: null,
    image: 'image',
  };

  const useStateAppMock = useStateApp as jest.Mock;
  useStateAppMock.mockReturnValue({ products: [product, { ...product, id: 456 }] });

  afterEach(() => {
    useStateAppMock.mockClear();
  });

  it('should show product list', () => {
    const { getByTestId, getAllByTestId } = render(<ProductList />);
    const products = getAllByTestId('product');
    const productList = getByTestId('product-list');

    expect(products.length).toEqual(2);
    expect(productList).toMatchSnapshot();
  });
});
