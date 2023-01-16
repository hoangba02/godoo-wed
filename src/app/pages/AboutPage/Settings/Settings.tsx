import React from 'react';
import { Container, createStyles, Flex } from '@mantine/core';
import { motion } from 'framer-motion';
import { AboutPage } from '..';

function Settings() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.container}>
      <AboutPage />
      <Container fluid>Setting</Container>
    </Flex>
  );
}

export default Settings;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '45px 135px 0',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  about: {
    width: '100%',
  },
}));
