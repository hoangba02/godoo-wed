import React, { ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, Container, createStyles } from '@mantine/core';

interface Props {
  hide: () => void;
  children: ReactElement;
}
const MyOverlay = ({ children, hide }: Props) => {
  const { classes } = useStyles();
  const handleCloseOverlay = e => {
    hide();
    e.stopPropagation();
    // e.preventDefault();

    // e.stopImmediatePropagation();
  };
  return (
    <Container
      fluid
      className={classes.container}
      onClick={e => handleCloseOverlay(e)}
    >
      <Card className={classes.wrapper}>{children}</Card>
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
  },
  wrapper: {
    width: 430,
    height: '89%',
    minWidth: 430,
    borderRadius: 20,
    padding: '0px !important',
    transform: 'translateX(50%)',
  },
}));
