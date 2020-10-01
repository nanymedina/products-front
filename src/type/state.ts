import ProductT from './product';

type StateT = {
  products: ProductT[];
  search: string | null;
  error: string | null;
  shoppingCart: ProductT[];
};

export default StateT;
