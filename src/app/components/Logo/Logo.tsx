import { Avatar, clsx, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';
import React from 'react';

function Logo({ className }) {
  const { classes } = useStyles();
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
      }}
      className={className}
    >
      <Avatar className={classes.logo} color="lime" src={images.logo} />
    </Flex>
  );
}

export default Logo;

const useStyles = createStyles(() => ({
  logo: {
    width: '150px',
    height: '150px',
    [`@media (max-width:575px)`]: {
      width: '100px',
      height: '100px',
    },
  },
}));
