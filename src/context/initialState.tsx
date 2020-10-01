import StateT from '@src/type/state';

const initialState: StateT = {
  products: [],
  search: null,
  shoppingCart: [],
  error: null,
};

export default initialState;
