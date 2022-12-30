import React, { useState } from 'react';
import { Container, createStyles } from '@mantine/core';
import Header from 'app/components/Header/Header';

function HomeMobile() {
  const { classes } = HomeMobileStyles();
  const [active, setActive] = useState(0);

  return (
    <Container fluid className={classes.container}>
      <Header active={active} setActive={setActive} />
    </Container>
  );
}

export default HomeMobile;

const HomeMobileStyles = createStyles(() => ({
  container: {
    padding: 0,
  },
}));
