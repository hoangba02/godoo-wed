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
    marginTop: '2%',
    [`@media (min-width:1536px)`]: {
      marginTop: '6%',
    },
    [`@media (min-width:1440px) and (max-width:1535px)`]: {
      marginTop: '4%',
    },
    [`@media (max-width:575px)`]: {
      marginTop: '18px',
    },
  },
  socialBtn: {
    width: '10%',
    // height: '64px',
    padding: '0',
    borderRadius: '50%',
    [`@media (max-width:575px)`]: {
      width: '50px',
      height: '50px',
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));
