import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import ProductList from '@components/ProductList';
import ResultTitle from './ResultTitle';
import Style from './Showcase.module.scss';

const Showcase = (): ReactElement => {
  return (
    <Container className={Style.showcase} fluid>
      <ResultTitle />
      <ProductList />
    </Container>
  );
};

export default Showcase;
