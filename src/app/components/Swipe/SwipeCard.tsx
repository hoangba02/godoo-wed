import React from 'react';
import { createStyles, Paper } from '@mantine/core';

export default function SwipeCard({ image, radius }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius={radius}
      sx={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
    />
  );
}

const useStyles = createStyles(theme => ({
  card: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'fill',
    // backdropFilter: 'blur(22px)',
    imageRendering: 'pixelated',
    objectPosition: 'center',
  },
}));
