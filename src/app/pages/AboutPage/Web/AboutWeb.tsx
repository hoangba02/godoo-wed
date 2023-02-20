import React, { memo } from 'react';
import HeaderChild from 'app/components/Header/HeaderChild';
import { Box, Container, Flex, Stack } from '@mantine/core';
import { AboutLayoutStyles } from '../AboutLayoutStyles';
import About from 'app/components/About/About';
interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  isEdit: boolean;
}
function AboutWeb({ children, title, isEdit }: Props) {
  const { classes } = AboutLayoutStyles();
  return (
    <Flex className={classes.container}>
      <Box
        sx={{
          width: '32%',
          minWidth: 378,
        }}
      >
        <About isEdit={isEdit} />
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
