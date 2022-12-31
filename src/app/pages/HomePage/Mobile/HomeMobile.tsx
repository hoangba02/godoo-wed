import React, { useState } from 'react';
import { Container, createStyles } from '@mantine/core';
import Header from 'app/components/Header/Header';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import Navbar from 'app/components/NavBar/NavBar';
import About from 'app/components/About/About';

const SCREEN = [<Swipe />, <Liked />, <Navbar />, <About />];
function HomeMobile() {
  const { classes } = HomeMobileStyles();
  const [active, setActive] = useState(0);

  return (
    <Container fluid className={classes.container}>
      {SCREEN[active]}
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
