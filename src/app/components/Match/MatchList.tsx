import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, createStyles, Text } from '@mantine/core';
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
function MatchList() {
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} radius={8} />
    </Carousel.Slide>
  ));

  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Text className={classes.text}>Match List (20)</Text>
      <Carousel
        styles={{
          root: {
            height: 107,
            '::before': {
              content: '""',
              position: 'absolute',
              right: 0,
              height: '100%',
              width: '100%',
              background:
                'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.22) 25%, rgba(255, 255, 255, 0) 50%)',
              zIndex: 1,
            },
          },
          container: {
            height: '100%',
          },
          control: {
            zIndex: 3,
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
        // loop
        align="start"
        height="100%"
        slideSize="25.5%"
        slideGap={12}
        draggable={false}
        withControls={true}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

export default MatchList;

const useStyles = createStyles(() => ({
  container: {
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
}));
