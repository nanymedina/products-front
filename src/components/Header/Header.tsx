import { ReactElement } from 'react';

import Navbar from '@components/Navbar';
import SearchBox from '@components/SearchBox';
import { Container } from 'react-bootstrap';

import Style from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={Style.header}>
      <Container className={Style.header_container} fluid>
        <Navbar>
          <SearchBox placeholder="¿Qué estás buscando?" />
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
