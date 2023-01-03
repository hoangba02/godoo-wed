import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSelector } from 'store/slice/userSlice/selectors';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import { CounterSlice } from 'store/slice/counterSlice';
import { useMediaQuery } from '@mantine/hooks';
import HomeMobile from './Mobile/HomeMobile';
import { HomeWeb } from './Web/HomeWeb';

export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);
  const user = useSelector(getUserSelector);
  // Local
  const phone = useMediaQuery('(max-width: 575px)');
  useEffect(() => {
    if (!user.token) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [navigate]);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {phone ? <HomeMobile /> : <HomeWeb />}
    </>
  );
}
