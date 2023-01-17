import React, { ReactElement } from 'react';
import { Card, Container, createStyles } from '@mantine/core';

interface Props {
  hide: () => void;
  children: ReactElement;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
  fullScreen?: boolean;
}
const MyOverlay = ({
  children,
  hide,
  height = '89.5%',
  width = 470,
  translateX,
  fullScreen = false,
}: Props) => {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const { classes } = useStyles();

  const handleCloseOverlay = event => {
    const { target } = event;
    if (cardRef.current !== null) {
      if (!cardRef.current.contains(target)) {
        console.log('Click');
        hide();
      }
    }
  };
  return (
    <Container
      fluid
      sx={{
        [`@media (max-width:575px)`]: {
          padding: fullScreen ? 0 : '70px 16px 20px',
        },
      }}
      className={classes.container}
      onClick={e => handleCloseOverlay(e)}
    >
      <Card
        sx={{
          width: width,
          height: height,
          transform: `translateX(${translateX})`,
          [`@media (max-width:575px)`]: {
            // height: '100vh',
            borderRadius: fullScreen ? 0 : 20,
          },
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
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  wrapper: {
    minWidth: 440,
    padding: '0px !important',
    borderRadius: 20,

    [`@media (max-width:575px)`]: {
      width: '100%',
      height: '100%',
      minWidth: 343,
      transform: 'translateX(0)',
      overflow: 'scroll',
    },
  },
}));
