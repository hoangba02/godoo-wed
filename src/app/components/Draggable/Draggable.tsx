import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Card, Container, Flex, Text, Title } from '@mantine/core';

import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { DraggableStyles } from './DraggableStyles';
import SwipeCard from '../Swipe/SwipeCard';

function Draggable({ setActive, data }) {
  const { classes } = DraggableStyles();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Card
      className={classes.content}
      sx={{
        height: 'max-content',
        zIndex: 5,

        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 20,
          background: 'transparent',
          // 'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)',
          zIndex: 6,
        },
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width - 30}/${height - 143})`,
        },
      }}
    >
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
      <Flex className={classes.info}>
        <Box>
          <Text className={classes.nickname}>Anna, 24</Text>
          <Title order={3} className={classes.title}>
            Just a free soul looking for someone to hike up with
          </Title>
        </Box>
        <Gift />
      </Flex>
    </Card>
  );
}
export default Draggable;
