import { Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactElement;
}
function Background({ children }: Props) {
  const phone = useMediaQuery('(max-width: 576px');
  return (
    <Container
      fluid
      sx={{
        height: '100%',
        padding: 0,
        position: 'relative',
        backgroundImage: `url(${
          phone ? images.bgLoginMobile : images.bgLogin
        })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          backgroundImage: `url(${
            phone ? images.bgLoginTopMobile : images.bgLoginTop
          })`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
        },
      }}
    >
      {children}
    </Container>
  );
}

export default Background;
