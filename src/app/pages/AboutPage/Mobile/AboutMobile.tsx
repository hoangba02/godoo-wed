import React, { memo } from 'react';
import HeaderChild from 'app/components/Header/HeaderChild';
import { Container, createStyles, Flex, Stack } from '@mantine/core';

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}
function AboutMobile({ children, title }: Props) {
  const { classes } = useStyles();
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
const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
    [`@media (max-width:799px)`]: {
      padding: 0,
    },
  },
  content: {
    width: '100%',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
    [`@media (max-width:799px)`]: {
      padding: 0,
    },
  },
  child: {
    gap: 10,
    width: '100%',
    paddingTop: 24,
    alignItems: 'center',
    [`@media (max-width:575px)`]: {
      padding: '24px 16px 0',
    },
  },
}));
