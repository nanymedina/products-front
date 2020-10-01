import { act } from 'react-dom/test-utils';
import axios from 'axios';

import Showcase from '@src/pages';
import { cleanup, render, fireEvent, screen } from '../utils/customTestingLibrary';

jest.mock('axios');

describe('Search Box', () => {
  const product = {
    id: 123,
    brand: 'brand',
    description: 'description',
    price: 20,
    oldPrice: null,
    discountRate: null,
    image: 'image',
  };

  const response = { data: { data: { getProducts: [product] } } };
  axios.post = jest.fn().mockResolvedValue(response);

  afterAll(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('show the welcome message for default', async () => {
    render(<Showcase />);

    screen.getByTestId('welcome-title');
  });

  it('show product list when has search', async () => {
    render(<Showcase />);
    const searchBox = screen.getByTestId('search-box');

    await act(async () => {
      fireEvent.change(searchBox, { target: { value: 'a' } });
      fireEvent.keyPress(searchBox, { key: 'Enter', code: 13, charCode: 13 });
    });

    const productList = screen.getAllByTestId('product');
    screen.getByTestId('result-title');

    expect(productList.length).toEqual(1);
  });
});
