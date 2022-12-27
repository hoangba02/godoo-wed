import React from 'react';
import { createStyles, Paper, Text, Title, Flex, Box } from '@mantine/core';

export default function Card({ image, title, nickname }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius={20}
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
