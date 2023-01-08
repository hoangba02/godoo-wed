import React, {
  createRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Card, Container, createStyles } from '@mantine/core';
import { current } from '@reduxjs/toolkit';

interface Props {
  hide: () => void;
  children: ReactElement;
}
const MyOverlay = ({ children, hide }: Props) => {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const { classes } = useStyles();

  const handleCloseOverlay = event => {
    const { target } = event;
    if (cardRef.current !== null) {
      if (!cardRef.current.contains(target)) {
        hide();
      }
    }
  };
  return (
    <Container
      fluid
      className={classes.container}
      onClick={e => handleCloseOverlay(e)}
    >
      <Card className={classes.wrapper} ref={cardRef}>
        {children}
      </Card>
    </Container>
  );
};

export default MyOverlay;

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    inset: 0,
    width: '100vw',
    height: '100vh',
    padding: '30px 0 0 0',
    background: 'rgba(0, 0, 0, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    [`@media (max-width:575px)`]: {
      padding: '70px 16px 20px',
    },
  },
  wrapper: {
    width: 430,
    height: '89%',
    minWidth: 430,
    borderRadius: 20,
    padding: '0px !important',
    transform: 'translateX(50%)',
    [`@media (max-width:575px)`]: {
      // position: 'relative',
      width: '100%',
      height: '100%',
      minWidth: 343,
      transform: 'translateX(0)',
      overflow: 'scroll',
      // paddingBottom: '60px !important',
    },
  },
}));
