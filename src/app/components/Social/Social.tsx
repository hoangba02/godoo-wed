import React from 'react';
import { Button, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';

function Social() {
  const { classes } = useStyles();
  return (
    <Flex mt={38} className={classes.social}>
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
const useStyles = createStyles(() => ({
  social: {
    width: '100%',
    justifyContent: 'center',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      marginTop: '18px ',
    },
    [`@media (max-width:575px)`]: {
      marginTop: '18px',
    },
  },
  socialBtn: {
    width: '64px',
    height: '64px',
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
