import React from 'react';
import { Button, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';

function Social() {
  const { classes } = makeStyles();
  return (
    <Flex className={classes.social}>
      <Button variant="subtle" className={classes.socialBtn}>
        <img className={classes.img} src={images.facebook} alt="facebook" />
      </Button>
      <Button variant="subtle" mx={64} className={classes.socialBtn}>
        <img className={classes.img} src={images.google} alt="google" />
      </Button>
      <Button variant="subtle" className={classes.socialBtn}>
        <img className={classes.img} src={images.apple} alt="apple" />
      </Button>
    </Flex>
  );
}

export default Social;
const makeStyles = createStyles(() => ({
  social: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 28,
    [`@media (max-width:575px)`]: {
      marginTop: 18,
    },
  },
  socialBtn: {
    width: 50,
    height: 50,
    padding: '0',
    borderRadius: '50%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));
