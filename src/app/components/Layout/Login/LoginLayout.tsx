import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import LoginMobile from './Mobile/LoginMobile';
import LoginWeb from './Web/LoginWeb';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function LoginLayout({ children }: Props) {
  const phone = useMediaQuery('(max-width:575px)');
  if (phone) return <LoginMobile>{children}</LoginMobile>;
  return <LoginWeb>{children}</LoginWeb>;
}

export default LoginLayout;
