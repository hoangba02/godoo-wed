import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createStyles, Flex } from '@mantine/core';

import { ReactComponent as Show } from 'assets/icons/show.svg';
import { ReactComponent as Hide } from 'assets/icons/hide.svg';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';

export function HomeWeb() {
  const { classes } = HomeWebStyles();
  const [drawer, setDrawer] = useState(false);

  const handleDrawerLike = () => {
    setDrawer(prev => !prev);
  };
  return (
    <HomeWebLayout>
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
    </HomeWebLayout>
  );
}

const HomeWebStyles = createStyles(() => ({
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
