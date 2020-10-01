import AppProvider from '@src/context/appContext';
import Layout from '@components/Layout';
import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

const WrapperRender = (children: ReactElement): RenderResult => {
  return render(
    <AppProvider>
      <Layout>{children}</Layout>
    </AppProvider>
  );
};

export * from '@testing-library/react';

export { WrapperRender as render };
