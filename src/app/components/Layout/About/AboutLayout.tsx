import HeaderChild from 'app/components/Header/HeaderChild';
import { Box, Container, createStyles, Flex } from '@mantine/core';
import React from 'react';
import About from 'app/components/About/About';

interface Props {
  children?: JSX.Element;
  title?: string;
}
function AboutLayout({ children, title }: Props) {
  const { classes } = useStyles();
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
        {children}
      </Container>
    </Flex>
  );
}

export default AboutLayout;
const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
  },
  content: {
    width: '100%',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
  },
}));
