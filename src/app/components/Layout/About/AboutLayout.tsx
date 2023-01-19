import HeaderChild from 'app/components/Header/HeaderChild';
import { Box, Container, createStyles, Flex, Stack } from '@mantine/core';
import React from 'react';
import About from 'app/components/About/About';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}
function AboutLayout({ children, title }: Props) {
  const { classes } = useStyles();
  const phone = useMediaQuery('(max-width: 575px)');
  if (!phone)
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
  return (
    <Container fluid className={classes.content}>
      <HeaderChild title={title} />
      <motion.div
        initial={{
          x: '-100vw',
        }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
      >
        <Stack className={classes.child}>{children}</Stack>
      </motion.div>
    </Container>
  );
}

export default AboutLayout;
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
