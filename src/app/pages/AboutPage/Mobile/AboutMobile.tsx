import React, { memo } from 'react';
import HeaderChild from 'app/components/Header/HeaderChild';
import { Container, Flex, Stack } from '@mantine/core';
import { AboutLayoutStyles } from '../AboutLayoutStyles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}
function AboutMobile({ children, title }: Props) {
  const { classes } = AboutLayoutStyles();
  return (
    <Flex className={classes.container}>
      <Container fluid className={classes.content}>
        <HeaderChild title={title} />
        <Stack className={classes.child}>{children}</Stack>
      </Container>
    </Flex>
  );
}

export default memo(AboutMobile);
