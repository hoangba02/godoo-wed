import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { openConfirmModal } from '@mantine/modals';
import { useDispatch, useSelector } from 'react-redux';
import { Button, createStyles, Flex, Text } from '@mantine/core';

import Liked from './Liked/Liked';
import Swipe from './Swipe/Swipe';
import { UserSlice } from 'store/slice/userSlice';
import { ReactComponent as Show } from 'assets/icons/show.svg';
import { ReactComponent as Hide } from 'assets/icons/hide.svg';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import { CounterSlice } from 'store/slice/counterSlice';

export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);
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
  useEffect(() => {
    // openModal();
  }, []);

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
            padding: '32px 0',
            borderLeft: '1.5px solid #D6D6D6',
          }}
        >
          <Swipe />
        </Flex>
        <motion.div
          className={classes.liked}
          initial={{ translateX: '20vh', width: 0 }}
          animate={{
            translateX: drawer ? '0' : '100vh',
            width: drawer ? 334 : 0,
          }}
          transition={{ delay: 0, duration: 1 }}
        >
          <Liked />
        </motion.div>
      </Flex>
      <motion.button
        animate={{ width: drawer ? 22 : 37 }}
        transition={{ duration: 0.5 }}
        style={{
          height: 80,
          padding: 0,
          border: 'none',
          borderRadius: '8px 0px 0px 8px',
          background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
          position: 'absolute',
          right: 0,
          top: 32,
        }}
        onClick={handleDrawerLike}
      >
        {!drawer ? <Show /> : <Hide />}
      </motion.button>
    </>
  );
}

const HomePageStyles = createStyles(() => ({
  home: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 135,
    backgroundColor: '#FFFFFF',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      marginRight: 0,
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      marginRight: 0,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
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
  liked: {
    padding: '32px 0 32px 26px',
    borderLeft: '1px solid #D6D6D6',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '32px 10px 32px 10px',
    },
  },
}));
