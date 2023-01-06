import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { createStyles, Paper, Text, Title } from '@mantine/core';

import SwipeCard from '../Swipe/SwipeCard';

function MyCarousel({ setActive, data }) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Carousel
        styles={{
          root: { height: '100%' },
          container: {
            height: '100%',
          },
          viewport: {
            borderRadius: 20,
          },
        }}
        loop
        // speed={5}
        height="100%"
        slideSize="100%"
        slideGap={0}
        draggable={false}
        withControls={false}
        plugins={[autoplay.current]}
        onSlideChange={value => setActive(value)}
      >
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <SwipeCard image={item} radius={0} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}
export default MyCarousel;

export function BioDescription() {
  const { classes } = BioStyles();
  return (
    <Paper className={classes.paper}>
      <Text className={classes.nickname}>Anna, 24</Text>
      <Title order={3} className={classes.title}>
        Just a free soul looking for someone to hike up with
      </Title>
    </Paper>
  );
}
const BioStyles = createStyles(() => ({
  paper: {
    color: 'var(--white)',
    background: 'transparent',
  },
  title: {
    width: 251,
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: 14,
    marginTop: 2,
    userSelect: 'none',
  },

  nickname: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    userSelect: 'none',
  },
}));
