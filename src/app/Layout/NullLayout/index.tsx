import {
  BackgroundImage,
  Box,
  Center,
  Container,
  createStyles,
  Image,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function NullLayout({ children }: Props) {
  const { classes } = useStyles();
  const { width, height } = useViewportSize();
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        paddingTop: `${(height / width) * 100}%`,
        backgroundImage: `url(${
          phone ? images.bgLoginMobile : images.bgLogin
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
}

export default NullLayout;

const useStyles = createStyles(() => ({
  layout: {},
}));
