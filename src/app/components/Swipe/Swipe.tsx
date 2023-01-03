import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SwipeStyles } from './SwipeStyles';
import { Box, Container, Flex, Text, Title } from '@mantine/core';

import Card from './Card';
import Nav from './Nav';
import Control from './Control';
import { FilterUser } from './FilterUser';
import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import SwipeTotorial from './SwipeTotorial';

const DATA = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Just a free soul looking for someone to hike up with',
    nickname: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    nickname: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    nickname: 'nature',
  },
];
function Swipe() {
  const slides = DATA.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} radius={0} />
    </Carousel.Slide>
  ));

  const { classes } = SwipeStyles();
  const [active, setActive] = useState<number>();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  // console.log(active);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container
      fluid
      className={classes.container}
      sx={{
        aspectRatio: '0.67',
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width}/${height - 65})`,
        },
      }}
    >
      <Flex className={classes.nav}>
        <button className={classes.btn}>
          <Undo />
        </button>
        {!tablet && <Nav active={active} data={DATA} />}
        {/* Btn filter */}
        <FilterUser />
      </Flex>
      <Box
        className={classes.content}
        sx={{
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
          {slides}
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
        {!tablet && <Control />}
      </Box>
      <SwipeTotorial />
      {tablet && <Nav active={active} data={DATA} />}
    </Container>
  );
}

export default Swipe;
