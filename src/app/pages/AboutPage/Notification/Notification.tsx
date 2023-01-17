import { Box, Container, createStyles, Flex } from '@mantine/core';
import About from 'app/components/About/About';
import HeaderChild from 'app/components/Header/HeaderChild';
import React from 'react';

function Notification() {
  const notifications = [
    {
      name: 'New message',
    },
    {
      name: 'New pairing',
    },
    {
      name: 'Admirer',
    },
    {
      name: 'Transaction',
    },
  ];
  const { classes } = useStyles();
  return (
    <Flex className={classes.container}>
      <Box
        sx={{
          width: '32%',
          minWidth: 378,
        }}
      >
        <About />
      </Box>
      <Container fluid className={classes.content}>
        <HeaderChild title="Notification" />
      </Container>
    </Flex>
  );
}

export default Notification;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
  },
  content: {
    width: '100%',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
  },
}));
