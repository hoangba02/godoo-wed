import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useMediaQuery } from '@mantine/hooks';
import HomeMobile from './Mobile/HomeMobile';
import { HomeWeb } from './Web/HomeWeb';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import Websocket from 'lib/socket/websocket';

export function HomePage() {
  const user = useSelector(getUserSelector);
  // Local
  const tablet = useMediaQuery('(max-width: 799px)', user.device, {
    getInitialValueInEffect: !user.device,
  });

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {tablet ? <HomeMobile /> : <HomeWeb />}
    </>
  );
}
