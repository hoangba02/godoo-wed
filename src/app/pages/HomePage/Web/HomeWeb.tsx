import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createStyles, Flex } from '@mantine/core';

import { ReactComponent as Show } from 'assets/icons/show.svg';
import { ReactComponent as Hide } from 'assets/icons/hide.svg';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';
import { useMediaQuery } from '@mantine/hooks';

export function HomeWeb() {
  const { classes } = HomeWebStyles();
  const ipad = useMediaQuery('(max-width: 991px)');
  const [drawer, setDrawer] = useState(false);

  const handleDrawerLike = () => {
    setDrawer(prev => !prev);
  };
  return (
    <HomeWebLayout drawer={drawer}>
      <Flex
        sx={{
          // width: '100%',
          justifyContent: 'center',
          padding: '32px 0',
        }}
      >
        <motion.div
          className={classes.swipe}
          transition={{
            duration: 1,
          }}
        >
          <Swipe />
        </motion.div>
      </Flex>
      <motion.div
        className={classes.liked}
        initial={{ translateX: '15vh', width: '0%' }}
        animate={
          ipad
            ? {
                translateX: drawer ? '0' : '100vh',
                width: drawer ? '65%' : '0%',
              }
            : {
                translateX: drawer ? '0' : '100vh',
                width: drawer ? '19%' : '0%',
              }
        }
        transition={{ delay: 0, duration: 1 }}
      >
        <Liked />
      </motion.div>
      <motion.button
        animate={{ width: drawer ? 22 : 37 }}
        transition={{ duration: 0.5 }}
        className={classes.drawerBtn}
        onClick={handleDrawerLike}
      >
        {!drawer ? <Show /> : <Hide />}
      </motion.button>
    </HomeWebLayout>
  );
}

const HomeWebStyles = createStyles(() => ({
  swipe: {
    width: 'max-content',
    height: 'max-content',
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
    maxWidth: '42.5%',
    // minWidth: 370,
    marginRight: 135,
    borderLeft: '1px solid #D6D6D6',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      minWidth: 0,
      width: '65%',
      marginRight: 0,
    },
  },
  drawerBtn: {
    height: 80,
    padding: 0,
    border: 'none',
    borderRadius: '8px 0px 0px 8px',
    background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
    position: 'absolute',
    right: 0,
    top: 75,
    [`@media (min-width:576px) and (max-width:767px)`]: {},
  },
}));
