import React from 'react';
import { Card, Center, Container } from '@mantine/core';
import { images } from 'assets/images';
import Logo from 'app/components/Logo/Logo';

interface Prop {
  padding?: number | string;
  children?: JSX.Element | JSX.Element[];
}
export default function PublicWeb({ children, padding = '30px 75px' }: Prop) {
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        backgroundImage: `url(${images.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        position: 'relative',
        ':before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0',
          top: '0',
          // top: -100,
          backgroundImage: `url(${images.backgroundSide})`,
        },
      }}
    >
      <Center
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Card
          sx={{
            width: '70%',
            height: '90%',
            maxWidth: 720,
            maxHeight: 915,
            borderRadius: 30,
            padding: ` ${padding} !important`,
            backgroundColor: 'rgba(255,255,255,0.9)',
            overflow: 'overlay',
          }}
        >
          {children}
        </Card>
      </Center>
    </Container>
  );
}
