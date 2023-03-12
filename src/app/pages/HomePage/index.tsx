import * as React from 'react';
import { Button } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';

import HomeWeb from './Web/HomeWeb';
import { HomePageProps } from 'types';
import HomeMobile from './Mobile/HomeMobile';
import { AuthSlice } from 'store/slice/authSlice';
import { selectAuth } from 'store/slice/authSlice/selectors';

export function HomePage({ children, active }: HomePageProps) {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { currentUser, login, isMobile } = useSelector(selectAuth);
  // Local
  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });

  if (mobile) return <HomeMobile active={active}>{children}</HomeMobile>;
  return <HomeWeb />;
}
