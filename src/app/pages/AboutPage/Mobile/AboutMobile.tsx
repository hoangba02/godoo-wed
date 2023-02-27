import React, { memo } from 'react';
import HeaderProfile from 'app/components/Header/HeaderProfile';
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
        <HeaderProfile title={title} />
        <Stack className={classes.child}>{children}</Stack>
      </Container>
    </Flex>
  );
}

export default memo(AboutMobile);
