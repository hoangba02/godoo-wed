import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, createStyles, Flex, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import Liked from './Liked/Liked';
import Matcher from './Match/Match';
import Swipe from './Swipe/Swipe';

export function HomePage() {
  const { actions } = UserSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = HomePageStyles();
  const openModal = () =>
    openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  useEffect(() => {
    // if (user.token === '') {
    //   navigate('/login');
    // } else {
    //   navigate('/');
    // }
  }, [navigate, user.token]);
  // useEffect(() => {
  //   openModal();
  //   axios
  //     .get('https://ttvnapi.com/v1/godoo/profile/get', {
  //       headers: {
  //         userid: 28,
  //         token: 'bux466nsq6nd3np60ftze6qnvbera5vi',
  //       },
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container fluid className={classes.container}>
        {/* <Button
          onClick={() => {
            dispatch(actions.logoutSuccess());
          }}
        >
          Log out
        </Button> */}
        <Flex className={classes.wrapper}>
          <Matcher />
          <Swipe />
          <Liked />
        </Flex>
      </Container>
    </>
  );
}

const HomePageStyles = createStyles(() => ({
  container: {
    height: '100%',
    margin: '0 135px',
    padding: '32px 0 0',
  },
  wrapper: {
    width: '100%',
    height: '100vh',
    justifyContent: 'space-between',
  },
}));
