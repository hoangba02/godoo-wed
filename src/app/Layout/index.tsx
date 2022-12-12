import Header from 'app/components/Header/Header';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
