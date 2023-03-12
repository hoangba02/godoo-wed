import React from 'react';
import { Container } from '@mantine/core';

import Header from './Header';
import { HomePageProps } from 'types';

function HomeMobile({ children, active }: HomePageProps) {
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
