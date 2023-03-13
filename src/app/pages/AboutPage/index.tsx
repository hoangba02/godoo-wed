import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import { selectIsMobile } from 'store/slice/authSlice/selectors';
import { Container, Flex } from '@mantine/core';
import About from './AboutScreeen/About';
import Header from '../HomePage/Mobile/Header';

export function AboutPage() {
  const isMobile = useSelector(selectIsMobile);
  // Local
  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        padding: '44px 0 0',
        '@media (max-width:575px)': {
          padding: '28px 0 0',
        },
      }}
    >
      <Container
        sx={{
          maxWidth: 570,
          padding: 0,
          '@media (max-width:575px)': {
            maxWidth: '100%',
          },
        }}
      >
        <About />
      </Container>
      {mobile && <Header active={3} />}
    </Container>
  );
}
