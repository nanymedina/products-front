import { render, fireEvent } from '@testing-library/react';
import Product from '@components/ProductList/Product';
import { useDispatchApp } from '@src/context/appContext';

jest.mock('@src/context/appContext');

describe('Product', () => {
  const useDispatchAppMock = useDispatchApp as jest.Mock;
  const dispatch = jest.fn();
  useDispatchAppMock.mockReturnValue(dispatch);

  const productWithoutDiscount = {
    id: 123,
    brand: 'brand',
    description: 'description',
    price: 20,
    oldPrice: null,
    discountRate: null,
    image: 'image',
  };

  const productWithDiscount = {
    id: 123,
    brand: 'brand',
    description: 'description',
    price: 10,
    oldPrice: 20,
    discountRate: 50,
    image: 'image',
  };

  afterEach(() => {
    useDispatchAppMock.mockClear();
  });

  it('should show product information without discount', () => {
    const { getByTestId } = render(<Product {...productWithoutDiscount} />);
    const product = getByTestId('product');

    expect(product).toMatchSnapshot();
  });

  it('should show product information with discount', () => {
    const { getByTestId } = render(<Product {...productWithDiscount} />);
    const product = getByTestId('product');

    expect(product).toMatchSnapshot();
  });

  it('dispatch action when click in button', () => {
    const { getByTestId } = render(<Product {...productWithDiscount} />);
    const Button = getByTestId('button');
    const action = { type: 'ADD_SHOPPING_CART', params: { product: productWithDiscount } };

    fireEvent.click(Button);

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith(action);
  });
});
