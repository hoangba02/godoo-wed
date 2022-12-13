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
        backgroundImage: `url(${images.bgLogin})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [`@media (max-width:575px)`]: {
          backgroundImage: `url(${images.bgLoginMobile})`,
        },
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
