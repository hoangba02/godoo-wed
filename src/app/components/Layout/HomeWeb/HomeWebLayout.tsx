import React, { useState } from 'react';
import { Container, createStyles } from '@mantine/core';

import Navbar from 'app/components/Match/Match';

export default function HomeWebLayout({ children }) {
  const { classes } = HomeWebStyles();

  return (
    <Container fluid className={classes.container}>
      <Container className={classes.navbar}>
        <Navbar />
      </Container>
      {children}
    </Container>
  );
}

const HomeWebStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    overflowX: 'hidden',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {},
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
  navbar: {
    minWidth: 370,
    width: '31%',
    height: '100%',
    margin: '0 0 0 135px',
    padding: '32px 0',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      margin: '0',
      padding: '16px 0',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      margin: '0',
      overflow: 'hidden',
      width: '55%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
}));
