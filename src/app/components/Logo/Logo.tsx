import { Avatar, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';
import React from 'react';

function Logo() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.wrapper}>
      <Avatar className={classes.logo} color="lime" src={images.logo} />
    </Flex>
  );
}

export default Logo;

const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: '150px',
    height: '150px',
    [`@media (max-width:575px)`]: {
      position: 'absolute',
      top: '-130px',
      width: '100px',
      height: '100px',
    },
  },
}));
