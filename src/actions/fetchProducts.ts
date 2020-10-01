import axios from 'axios';
import { Dispatch } from '@src/type/action';

const fetchProducts = async (search: string, dispatch: Dispatch): Promise<any> => {
  try {
    const response = await axios.post(process.env.GRAPHQL_URL || '', {
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
    });

    const { getProducts: products } = response.data.data;

    dispatch({ type: 'FETCH_PRODUCTS', params: { products, search } });
  } catch (e) {
    dispatch({ type: 'ERROR_FETCH_PRODUCTS', params: { error: e.message } });
  }
};

export default fetchProducts;
