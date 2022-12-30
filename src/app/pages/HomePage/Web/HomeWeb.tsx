import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Container, createStyles, Flex } from '@mantine/core';

import { ReactComponent as Show } from 'assets/icons/show.svg';
import { ReactComponent as Hide } from 'assets/icons/hide.svg';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import Navbar from 'app/components/NavBar/NavBar';

export function HomeWeb() {
  const { classes } = HomeWebStyles();
  const [drawer, setDrawer] = useState(false);

  const handleDrawerLike = () => {
    setDrawer(prev => !prev);
  };
  return (
    <Container fluid className={classes.container}>
      <Container className={classes.navbar}>
        <Navbar />
      </Container>
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
            width: drawer ? 350 : 0,
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
    </Container>
  );
}

const HomeWebStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    overflowX: 'hidden',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {},
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
  navbar: {
    maxWidth: 370,
    width: '31%',
    height: '100%',
    margin: '0 0 0 135px',
    padding: '32px 0',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      margin: '0',
      padding: '16px 0',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      margin: '0',
      overflow: 'hidden',
      width: '55%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
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
    padding: '32px 16px 32px 26px',
    borderLeft: '1px solid #D6D6D6',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '32px 10px 32px 10px',
    },
  },
}));
