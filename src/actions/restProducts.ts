import { Dispatch } from '@src/type/action';

const resetProducts = (dispatch: Dispatch): void => {
  dispatch({ type: 'RESET_PRODUCTS' });
};

export default resetProducts;
