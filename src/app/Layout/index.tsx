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
      <Container className={classes.navbar}>
        <Navbar />
      </Container>
      {children}
      {phone && <Header />}
    </Container>
  );
}

export default Layout;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    overflowX: 'hidden',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      padding: '32px 0',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {},
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
  navbar: {
    maxWidth: 370,
    width: '31%',
    height: '100%',
    // minWidth: '31%',
    margin: '0 0 0 135px',
    padding: '32px 0',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {
      margin: '0',
      overflow: 'hidden',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
}));
