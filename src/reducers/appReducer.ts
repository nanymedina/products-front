import StateT from '@src/type/state';
import { ActionT } from '@src/type/action';

const reducer = (state: StateT, action: ActionT): any => {
  const { params } = action;

  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      const { products, search } = params;

      return { ...state, products, search, error: null };
    }
    case 'RESET_PRODUCTS': {
      return { ...state, products: [], search: null, error: null };
    }
    case 'ERROR_FETCH_PRODUCTS': {
      const { error } = params;

      return { ...state, error, products: [] };
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};

export default reducer;
