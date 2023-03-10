import { Button } from '@mantine/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from 'store/slice/authSlice';
import { selectAuth } from 'store/slice/authSlice/selectors';

export function HomePage() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { currentUser, login } = useSelector(selectAuth);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Button
        onClick={() => {
          dispatch(
            authActions.requestLogout({
              username: currentUser.username,
              password: currentUser.password,
              remember: login.remember,
              unKnowError: false,
            }),
          );
        }}
      >
        Logout
      </Button>
    </>
  );
}
