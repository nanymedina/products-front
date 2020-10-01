type TypeActionT =
  | 'FETCH_PRODUCTS'
  | 'RESET_PRODUCTS'
  | 'ERROR_FETCH_PRODUCTS'
  | 'ADD_SHOPPING_CART';

export type ActionT = {
  type: TypeActionT;
  params?: any;
};

export type Dispatch = (action: ActionT) => ActionT;
