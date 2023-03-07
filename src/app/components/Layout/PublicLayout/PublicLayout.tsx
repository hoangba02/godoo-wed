import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import PublicWeb from './PublicWeb';
import PublicMobile from './PublicMobile';
import Logo from 'app/components/Logo/Logo';
import { selectIsMobile } from 'store/slice/authSlice/selectors';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function PublicLayout({ children }: Props) {
  const isMobile = useSelector(selectIsMobile);
  // Local
  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });
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
