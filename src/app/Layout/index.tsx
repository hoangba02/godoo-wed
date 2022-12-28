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
    padding: '32px 135px',
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'hidden',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      padding: '32px 0',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '32px 0',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
}));
