import React, { useRef, useState } from 'react';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { SwipeStyles } from './SwipeStyles';
import Card from './Card';
import Control from './Control';
import Filter from './Filter';

const data = [
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
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} radius={0} />
    </Carousel.Slide>
  ));

  const { classes } = SwipeStyles();
  const [active, setActive] = useState<number>();
  // console.log(active);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container fluid className={classes.container}>
      <Flex className={classes.nav}>
        <button className={classes.btn}>
          <Undo />
        </button>
        <Flex gap={6}>
          {data.map((value, index) => (
            <Box
              key={index}
              className={index === active ? 'active' : ''}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: 'var(--grey-light)',
                transition: 'all 0.5s ease',
                '&.active': {
                  width: 30,
                  borderRadius: 8,
                  backgroundColor: 'rgba(228, 97, 37, 0.6)',
                },
              }}
            ></Box>
          ))}
        </Flex>
        {/* Btn filter */}
        <Filter />
      </Flex>
      <Box className={classes.content}>
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
        <Control />
      </Box>
    </Container>
  );
}

export default Swipe;
