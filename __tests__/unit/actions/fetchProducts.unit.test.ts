import axios from 'axios';
import fetchProducts from '@src/actions/fetchProducts';
import { cleanup } from '@testing-library/react';

jest.mock('@src/type/action');
jest.mock('axios');

describe('Fetch Products', () => {
  const dispatch = jest.fn();
  const products = [
    {
      id: 123,
      brand: 'brand',
      description: 'description',
      price: 20,
      oldPrice: null,
      discountRate: null,
      image: 'image',
    },
  ];

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('return dispach with products when response is succefull', async () => {
    const response = { data: { data: { getProducts: products } } };
    axios.post = jest.fn().mockResolvedValue(response);
    process.env.GRAPHQL_URL = 'graphl_url';

    const search = 'asa';
    const action = { type: 'FETCH_PRODUCTS', params: { products, search } };
    const query = {
      query: `
      query {
        getProducts(search:"${search}") {
          id
          brand
          description
          price
          oldPrice
          discountRate
          image
        }
      }`,
    };

    await fetchProducts(search, dispatch);

    expect(axios.post).toBeCalledWith('graphl_url', query);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith(action);
  });

  it('return dispach with error when response not is succefull', async () => {
    const search = 'asa';
    const action = { type: 'ERROR_FETCH_PRODUCTS', params: { error: 'service error' } };
    axios.post = jest.fn().mockImplementation(() => {
      throw new Error('service error');
    });

    await fetchProducts(search, dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith(action);
  });
});
