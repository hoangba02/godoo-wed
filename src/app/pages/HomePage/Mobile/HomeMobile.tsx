import React from 'react';
import { Container } from '@mantine/core';

import Header from './Header';
import { HomePageProps } from 'types';
import Home from '../HomeScreen/Home';

function HomeMobile({ children = <Home />, active }: HomePageProps) {
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        padding: 0,
      }}
    >
      {children}
      <Header active={active} />
    </Container>
  );
}

export default HomeMobile;
