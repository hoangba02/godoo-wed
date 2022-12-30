import { ClassNames } from '@emotion/react';
import { Box, createStyles, SimpleGrid } from '@mantine/core';
import LikedAccount from 'app/components/LikedAccount/LikedAccount';
import React from 'react';

function NewLiked() {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <SimpleGrid cols={2} className={classes.gird}>
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
        <LikedAccount />
      </SimpleGrid>
    </Box>
  );
}

export default NewLiked;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    marginTop: 12,
  },
  gird: {
    gap: '12px 12px',
  },
}));
