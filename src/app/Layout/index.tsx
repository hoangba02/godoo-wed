import React, { ReactNode } from 'react';
import { Container, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Header from 'app/components/Header/Header';
import Navbar from 'app/components/NavBar/NavBar';

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  const { classes } = useStyles();
  const phone = useMediaQuery('(max-width:575px)');
  return (
    <Container fluid className={classes.container}>
      <Navbar />
      {children}
      {phone && <Header />}
    </Container>
  );
}

export default Layout;

const useStyles = createStyles(() => ({
  container: {
    height: '100vh',
    margin: '0 135px',
    padding: '32px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
