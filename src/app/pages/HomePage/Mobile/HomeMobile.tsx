import React, { useEffect, useState } from 'react';
import { Container, createStyles } from '@mantine/core';
import Header from 'app/components/Header/Header';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import Navbar from 'app/components/NavBar/NavBar';
import About from 'app/components/About/About';

function HomeMobile() {
  const { classes } = HomeMobileStyles();
  const [active, setActive] = useState(0);
  return (
    <Container fluid className={classes.container}>
      {active === 0 ? (
        <Swipe />
      ) : active === 1 ? (
        <Liked />
      ) : active === 2 ? (
        <Navbar />
      ) : (
        <About />
      )}
      <Header active={active} setActive={setActive} />
    </Container>
  );
}

export default HomeMobile;

const HomeMobileStyles = createStyles(() => ({
  container: {
    minWidth: '100%',
    minHeight: '100vh',
    padding: 0,
  },
}));
