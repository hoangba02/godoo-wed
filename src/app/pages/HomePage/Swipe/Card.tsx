import React from 'react';
import { createStyles, Paper } from '@mantine/core';

export default function Card({ image }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius={0}
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    />
  );
}

const useStyles = createStyles(theme => ({
  card: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
