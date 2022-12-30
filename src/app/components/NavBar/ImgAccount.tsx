import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, createStyles } from '@mantine/core';
import Card from '../Swipe/Card';

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
function ImgAccount() {
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} radius={8} />
    </Carousel.Slide>
  ));

  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Carousel
        styles={{
          root: { height: '100%' },
          container: {
            height: '100%',
          },
        }}
        // loop
        align="start"
        height="100%"
        slideSize="27%"
        slideGap={12}
        draggable={true}
        withControls={false}
      >
        <Carousel.Slide>1</Carousel.Slide>
        {slides}
      </Carousel>
    </Container>
  );
}

export default ImgAccount;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: 131,
    margin: '12px 0 14px',
    padding: '0 0 20px',
  },
}));
