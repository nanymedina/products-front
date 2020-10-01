import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import { useStateApp } from '@src/context/appContext';
import ProductT from '@src/type/product';
import Product from './Product';
import Style from './ProductList.module.scss';

const ProductsList = (): ReactElement => {
  const { products } = useStateApp();

  return (
    <Container data-testid="product-list" className={Style.products}>
      {products.map((product: ProductT) => (
        <Product key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default ProductsList;
