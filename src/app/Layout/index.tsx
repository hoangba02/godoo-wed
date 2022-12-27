import { useMediaQuery } from '@mantine/hooks';
import Header from 'app/components/Header/Header';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  const phone = useMediaQuery('(max-width:575px)');
  return (
    <>
      {children}
      {phone && <Header />}
    </>
  );
}

export default Layout;
