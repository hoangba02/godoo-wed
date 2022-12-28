import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Text,
} from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import Liked from './Liked/Liked';
import Swipe from './Swipe/Swipe';
import { motion } from 'framer-motion';
import Navbar from 'app/components/NavBar/NavBar';

export function HomePage() {
  const { actions } = UserSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = HomePageStyles();
  const [drawer, setDrawer] = useState(false);
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

  const handleDrawerLike = () => {
    setDrawer(prev => !prev);
  };
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Flex className={classes.home}>
        <Flex
          sx={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Swipe />
        </Flex>
        <motion.div
          initial={{ translateX: '10vh', width: 0 }}
          animate={{
            translateX: drawer ? '0' : '100vh',
            width: drawer ? 308 : 0,
          }}
          transition={{ delay: 0, duration: 1 }}
        >
          <Liked />
        </motion.div>
      </Flex>
      <button className={classes.drawer} onClick={handleDrawerLike}>
        Click
      </button>
    </>
  );
}

const HomePageStyles = createStyles(() => ({
  home: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  drawer: {
    position: 'absolute',
    right: 0,
    top: 32,
  },
  // btn: {
  //   height: 38,
  // },
}));
