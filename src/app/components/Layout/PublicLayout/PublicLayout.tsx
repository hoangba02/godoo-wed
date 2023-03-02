import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import PublicMobile from './PublicMobile';
import PublicWeb from './PublicWeb';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function PublicLayout({ children }: Props) {
  const mobile = useMediaQuery('(max-width: 575px)');

  if (mobile) return <PublicMobile>{children}</PublicMobile>;
  return <PublicWeb>{children}</PublicWeb>;
}

export default PublicLayout;
