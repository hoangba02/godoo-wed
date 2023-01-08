import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, createStyles, Text } from '@mantine/core';
import Card from '../Swipe/SwipeCard';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
];
function MatchList() {
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} radius={8} />
    </Carousel.Slide>
  ));

  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Text className={classes.text}>Pairing list (20)</Text>
      <Carousel
        styles={{
          root: {
            height: 107,
            '::before': {
              content: '""',
              position: 'absolute',
              right: -1,
              height: '100%',
              width: '50%',
              background:
                'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.22) 25%, rgba(255, 255, 255, 0) 50%)',
              zIndex: 1,
            },
          },
          container: {
            height: '100%',
          },
          control: {
            color: '#FFFFFF',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 3,
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
          slide: {
            position: 'relative',
          },
        }}
        align="start"
        height="100%"
        slideSize="25.5%"
        slideGap={12}
        draggable={false}
        withControls={true}
        controlsOffset={0}
        nextControlIcon={<IconChevronRight stroke={2.5} />}
        previousControlIcon={<IconChevronLeft stroke={2.5} />}
      >
        {slides}
      </Carousel>
      <div className={classes.border}></div>
    </Container>
  );
}

export default MatchList;

const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: '100%',
    height: 140,
    padding: 0,
    marginTop: 12,
  },
  text: {
    color: '#E46125',
    fontSize: 18,
    lineHeight: '22px',
    marginBottom: 10,
  },
  border: {
    height: 112,
    width: '24.5%',
    position: 'absolute',
    left: -3,
    bottom: -1,
    borderRadius: 8,
    background:
      'linear-gradient(0deg, rgba(228,97,37,1) 0%, rgba(201,26,68,1) 100%)',
    zIndex: -1,
    '::after': {
      content: '""',
      position: 'absolute',
      left: 3,
      top: 3,
      height: 'calc(100% - 6px)',
      width: 'calc(100% - 6px)',
      borderRadius: 8,
      background: 'var(--white)',
      zIndex: 1,
    },
  },
}));
