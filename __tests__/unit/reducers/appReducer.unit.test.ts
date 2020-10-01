import reducer from '@src/reducers/appReducer';
import { ActionT } from '@src/type/action';

describe('App Reducer', () => {
  const product = {
    id: 123,
    brand: 'brand',
    description: 'description',
    price: 20,
    oldPrice: null,
    discountRate: null,
    image: 'image',
  };

  const initialState = {
    products: [],
    search: null,
    shoppingCart: [],
    error: null,
  };

  describe('FETCH PRODUCTS', () => {
    it('return new state', () => {
      const action: ActionT = {
        type: 'FETCH_PRODUCTS',
        params: { products: [product], search: 'brand' },
      };
      const expectState = {
        ...initialState,
        products: [product],
        search: 'brand',
      };

      const newState = reducer(initialState, action);

      expect(newState).toMatchObject(expectState);
    });
  });

  describe('RESET PRODUCTS', () => {
    it('return new state', () => {
      const oldState = {
        ...initialState,
        products: [product],
        search: 'brand',
      };
      const action: ActionT = {
        type: 'RESET_PRODUCTS',
      };
      const expectState = { ...oldState, products: [], search: null, error: null };

      const newState = reducer(oldState, action);

      expect(newState).toMatchObject(expectState);
    });
  });

  describe('ERROR FETCH PRODUCTS', () => {
    it('return new state', () => {
      const oldState = {
        ...initialState,
        products: [product],
        search: 'brand',
      };
      const action: ActionT = {
        type: 'ERROR_FETCH_PRODUCTS',
        params: { error: 'fetch has error' },
      };
      const expectState = { ...oldState, error: 'fetch has error', products: [] };

      const newState = reducer(oldState, action);

      expect(newState).toMatchObject(expectState);
    });
  });
});
