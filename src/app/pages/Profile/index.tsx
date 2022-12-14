import { Button, Container } from '@mantine/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export function Profile() {
  const { actions } = UserSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(getUserSelector);
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        Profile
        <Button
          onClick={() => {
            dispatch(actions.logoutSuccess());
          }}
        >
          Log out
        </Button>
      </Container>
    </>
  );
}
