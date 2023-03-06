import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import PublicMobile from './PublicMobile';
import PublicWeb from './PublicWeb';
import Logo from 'app/components/Logo/Logo';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function PublicLayout({ children }: Props) {
  const mobile = useMediaQuery('(max-width: 575px)');

  if (mobile) return <PublicMobile>{children}</PublicMobile>;
  return (
    <PublicWeb>
      <>
        <Logo />
        {children}
      </>
    </PublicWeb>
  );
}

export default PublicLayout;
