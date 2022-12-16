import {
  BackgroundImage,
  Box,
  Center,
  Container,
  createStyles,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function NullLayout({ children }: Props) {
  const { classes } = useStyles();
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <Container className={classes.layout}>
      {/* <img
        // sx={{
        //   // height: 'max-content',
        //   position: 'absolute',
        //   inset: 0,
        // }}
        src={phone ? images.bgLoginMobile : images.bgLogin}
      ></img> */}
      {children}
    </Container>
  );
}

export default NullLayout;

const useStyles = createStyles(() => ({
  layout: {
    // position: 'relative',
    width: '100%',
    minHeight: '100%',
    backgroundImage: `url(${images.bgLogin})`,
  },
}));
