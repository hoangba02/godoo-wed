import { Button, clsx, Container, Flex } from '@mantine/core';
import React, { useState } from 'react';
import { LikedStyles } from './LikedStyles';
import NewLiked from './NewLiked';
import { motion } from 'framer-motion';

function Liked() {
  const { classes } = LikedStyles();
  const [active, setActive] = useState(true);
  // const [opened, setOpened] = useState(false);

  return (
    <Container fluid className={classes.container}>
      <Flex
        sx={{
          width: '100%',
          gap: 8,
        }}
      >
        <Button
          className={clsx(classes.btn, active ? 'active' : '')}
          onClick={() => {
            setActive(true);
          }}
        >
          Liked you (50+)
        </Button>
        <Button
          className={clsx(classes.btn, !active ? 'active' : '')}
          onClick={() => {
            setActive(false);
          }}
        >
          You liked (50+)
        </Button>
      </Flex>
      <NewLiked />
    </Container>
  );
}

export default Liked;
