import React, { useState } from 'react';
import { Container, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import About from 'app/components/About/About';

export function AboutPage() {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.container}>
      <About />
    </Container>
  );
}

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
    display: 'flex',
    justifyContent: 'center',
  },
}));
