import { Box, Center, createStyles } from '@mantine/core';
import { images } from 'assets/images';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function NullLayout({ children }: Props) {
  const { classes } = useStyles();
  return (
    <Box
      className={classes.layout}
      sx={{
        backgroundImage: `url(${images.gbLogin})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Box>
  );
}

export default NullLayout;

const useStyles = createStyles(() => ({
  layout: {
    position: 'absolute',
    inset: 0,
    width: '100vw',
    height: '100vh',
  },
}));
