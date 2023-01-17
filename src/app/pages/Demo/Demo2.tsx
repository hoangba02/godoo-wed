import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, Container, createStyles, Flex, Paper } from '@mantine/core';
import Demo from './Demo';

function Demo2() {
  const swipeList = [
    {
      userId: 397,
      nickname: 'Quang036',
      picture: [
        'https://ttvnapi.com/v1/getfile/40bcd6d7-9ddb-425b-87a4-49f7e6838f64',
      ],
    },
    {
      userId: 337,
      nickname: 'Quang036',
      picture: [
        'https://ttvnapi.com/v1/getfile/195f9408-8b8a-4e31-a9cc-3420fa61c6eb',
      ],
    },
    {
      userId: 597,
      nickname: 'Quang036',
      picture: [
        'https://ttvnapi.com/v1/getfile/9cf5d4a2-3596-400b-81d9-b1dbed156c12',
      ],
    },
    {
      userId: 497,
      nickname: 'Quang036',
      picture: [
        'https://ttvnapi.com/v1/getfile/db833932-65f4-4a84-9ede-db17f2b40e6b',
      ],
    },
  ];
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Flex className={classes.swipe}>
        {swipeList.map((item, index) => (
          <Demo data={item} />
        ))}
      </Flex>
    </Container>
  );
}

export default Demo2;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  swipe: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    position: 'absolute',
    width: 470,
    height: 700,
    padding: '0px !important',
    overflow: 'initial',
  },
}));
