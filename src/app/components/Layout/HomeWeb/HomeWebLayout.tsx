import React from 'react';
import { Container, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import Match from 'app/components/Match/Match';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
  children?: any;
  drawer?: boolean;
}
export default function HomeWebLayout({ children, drawer }: Props) {
  const { classes } = HomeWebStyles();
  const tablet = useMediaQuery('(max-width:990px)');

  return (
    <Container fluid className={classes.container}>
      <Container className={classes.navbar}>
        <motion.div
          initial={{ translateX: '0', opacity: 1 }}
          animate={{
            translateX: tablet && drawer ? '-55vh' : '0',
            opacity: tablet && drawer ? 0.5 : 1,
          }}
          transition={{ delay: 0, duration: 0.5 }}
        >
          <Match />
        </motion.div>
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
    overflow: 'hidden',
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
    [`@media (min-width:800px) and (max-width:991px)`]: {
      margin: '0',
      overflow: 'hidden',
      width: '100%',
      minWidth: 0,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
  },
}));
