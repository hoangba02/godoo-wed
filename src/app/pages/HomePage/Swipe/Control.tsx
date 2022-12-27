import React from 'react';
import { motion } from 'framer-motion';
import { Box, createStyles, Flex } from '@mantine/core';
import { ReactComponent as UnLike } from 'assets/icons/unLike.svg';
import { ReactComponent as Like } from 'assets/icons/like.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrowUp.svg';

// const btn =[

// ]
function Control() {
  const { classes } = useStyles();
  return (
    <Box>
      <Flex className={classes.control}>
        <motion.button
          className={classes.skip}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 8px #FF9565',
          }}
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
        >
          <Like />
        </motion.button>
      </Flex>
    </Box>
  );
}

export default Control;

const useStyles = createStyles(() => ({
  control: {
    width: 264,
    height: 66,
    backdropFilter: 'blur(12.5px)',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 33,
    padding: '0 12.5px',
    position: 'absolute',
    bottom: 14,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(255, 161, 118, 0.2)',
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
