import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { createStyles, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import { ReactComponent as Gift } from 'assets/icons/home/giftBig.svg';
import { ReactComponent as Heart } from 'assets/icons/home/heart.svg';

import SwipeCard from '../Swipe/SwipeCard';

function MyCarousel({ setActive, data }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
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
        height="100%"
        slideSize="100%"
        slideGap={0}
        draggable={false}
        withControls={false}
        // plugins={[autoplay.current]}
        onSlideChange={value => setActive(value)}
      >
        {data.picture
          .filter(value => value !== null)
          .map((item, index) => (
            <Carousel.Slide key={index}>
              <SwipeCard image={item} radius={0} />
            </Carousel.Slide>
          ))}
      </Carousel>
    </>
  );
}
export default MyCarousel;

interface DescProps {
  data: any;
}
export function BioDescription({ data }: DescProps) {
  const { classes } = BioStyles();
  return (
    <Flex className={classes.container}>
      <Paper className={classes.paper}>
        <Text className={classes.nickname}>{data.nickname}, 24</Text>
        <Title order={3} className={classes.title}>
          {data.description}
        </Title>
      </Paper>
      <Stack>
        <Heart />
        <Gift />
      </Stack>
    </Flex>
  );
}
const BioStyles = createStyles(() => ({
  container: {
    gap: 18,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 30,
    zIndex: 7,
    [`@media (max-width:799px)`]: {
      bottom: 50,
    },
    [`@media (max-width:575px)`]: {
      bottom: 20,
    },
  },
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
