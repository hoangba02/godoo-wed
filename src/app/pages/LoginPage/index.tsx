import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from '@mantine/hooks';

import LoginWeb from './Web/LoginWeb';
import LoginMobile from './Mobile/LoginMobile';
export function LoginPage() {
  const mobile = useMediaQuery('(max-width: 575px)');
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {mobile ? <LoginMobile /> : <LoginWeb />}
    </>
  );
}
