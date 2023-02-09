import React, { memo } from 'react';
import HeaderChild from 'app/components/Header/HeaderChild';
import { Box, Container, Flex, Stack } from '@mantine/core';
import About from 'app/components/About/About';
import { AboutLayoutStyles } from '../AboutLayoutStyles';
interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}
function AboutWeb({ children, title }: Props) {
  const { classes } = AboutLayoutStyles();
  return (
    <Flex className={classes.container}>
      <Box
        sx={{
          width: '32%',
          minWidth: 378,
        }}
      >
        <About />
      </Box>
      <Container fluid className={classes.content}>
        <HeaderChild title={title} />
        <Stack className={classes.child}>{children}</Stack>
      </Container>
    </Flex>
  );

  // );
}

export default memo(AboutWeb);
