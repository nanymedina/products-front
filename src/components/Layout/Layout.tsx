import { ReactNode, ReactElement } from 'react';
import Head from 'next/head';
import Header from '@components/Header';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout): ReactElement => (
  <>
    <Head>
      <title>ULM</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
