import React, { ReactElement } from 'react';
import { Card, Container, createStyles } from '@mantine/core';

interface Props {
  hide: () => void;
  children: ReactElement;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
}
const MyOverlay = ({
  children,
  hide,
  height = '89%',
  width = 430,
  translateX,
}: Props) => {
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
      <Card
        sx={{
          width: width,
          height: height,
          transform: `translateX(${translateX})`,
        }}
        className={classes.wrapper}
        ref={cardRef}
      >
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
    minWidth: 430,
    borderRadius: 20,
    padding: '0px !important',
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
