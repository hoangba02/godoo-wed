import React from 'react';
import { Container, createStyles } from '@mantine/core';
import About from 'app/components/About/About';
export function AboutMe() {
  const { classes } = makeStyles();

  return (
    <Container fluid className={classes.container}>
      <About />
    </Container>
  );
}

const makeStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
    display: 'flex',
    justifyContent: 'center',
  },
}));
