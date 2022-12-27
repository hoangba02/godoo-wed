import { Button, clsx, Container, Flex } from '@mantine/core';
import React, { useState } from 'react';
import { LikedStyles } from './LikedStyles';

function Liked() {
  const { classes } = LikedStyles();
  const [active, setActive] = useState(true);
  return (
    <Container fluid className={classes.container}>
      <Flex
        sx={{
          width: '100%',
          gap: '4%',
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
    </Container>
  );
}

export default Liked;
