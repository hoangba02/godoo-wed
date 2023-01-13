import React from 'react';
import { motion } from 'framer-motion';
import { Box, createStyles, Flex } from '@mantine/core';
import { ReactComponent as UnLike } from 'assets/icons/unLike.svg';
import { ReactComponent as Like } from 'assets/icons/like.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrowUp.svg';

// const btn =[

// ]
function Control({ childRefs, currentIndex, canSwipe, length }) {
  const { classes } = useStyles();
  const onSwipe = dir => {
    if (canSwipe && currentIndex < length) {
      // console.log('swipe');
      childRefs.current[currentIndex].swipe(dir);
    } else {
      // console.log('no swipe');
    }
  };
  return (
    <Flex className={classes.control}>
      <motion.button
        className={classes.skip}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 8px #FF9565',
        }}
        onClick={(): void => onSwipe('left')}
      >
        <UnLike />
      </motion.button>
      <Flex gap={18}>
        <motion.button className={classes.arrow}>
          <Arrow />
        </motion.button>
        <motion.button className={classes.arrow}>
          <ArrowUp />
        </motion.button>
        <motion.button className={classes.arrow}>
          <Arrow />
        </motion.button>
      </Flex>
      <motion.button
        className={classes.skip}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 8px #FF9565',
        }}
        onClick={(): void => onSwipe('right')}
      >
        <Like />
      </motion.button>
    </Flex>
  );
}

export default Control;

const useStyles = createStyles(() => ({
  control: {
    width: 264,
    height: 66,
    justifyContent: 'space-between',
    backdropFilter: 'blur(12.5px)',
    alignItems: 'center',
    borderRadius: 33,
    padding: '0 12.5px',
    position: 'absolute',
    bottom: '65px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 161, 118, 0.2)',
    zIndex: 7,
    // backgroundImage:
    //   'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%);',
    // '&::before': {
    //   content: '""',
    //   position: 'absolute',
    //   top: 2,
    //   left: 2,
    //   borderRadius: 32,
    //   backgroundColor: 'rgba(255, 161, 118, 0.2)',
    //   backdropFilter: 'blur(12.5px)',
    //   height: 'calc(100% - 4px)',
    //   width: 'calc(100% - 4px)',
    //   zIndex: -1,
    // },
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   top: 2,
    //   left: 2,
    //   borderRadius: 32,
    //   backgroundColor: 'rgba(255, 161, 118, 1)',
    //   height: 'calc(100% - 4px)',
    //   width: 'calc(100% - 4px)',
    //   zIndex: -1,
    // },
  },
  skip: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  arrow: {
    width: 24,
    height: 24,
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#FFE0D2',
    cursor: 'pointer',
  },
}));
