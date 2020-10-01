import { ReactElement, ReactNode } from 'react';

interface INavbar {
  children?: ReactNode;
}

const Navbar = ({ children }: INavbar): ReactElement => {
  return <nav>{children}</nav>;
};

export default Navbar;
