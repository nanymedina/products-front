import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

import Layout from '@components/Layout';
import ContextProvider from '@src/context/appContext';

const Store = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
};

export default Store;
