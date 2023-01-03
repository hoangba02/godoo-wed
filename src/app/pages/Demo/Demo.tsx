import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Flex, Text, Title } from '@mantine/core';

import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { ReactComponent as NavLeft } from 'assets/icons/narrowLeft.svg';
import { ReactComponent as NavUp } from 'assets/icons/narrowUp.svg';
import { SwipeStyles } from 'app/components/Swipe/SwipeStyles';
import { FilterUser } from 'app/components/Swipe/FilterUser';
import Nav from 'app/components/Swipe/Nav';
import Control from 'app/components/Swipe/Control';
import Card from 'app/components/Swipe/Card';

const DATA = [
  {
    userId: 1,
    nickname: 'nature1',
    profile: {
      picture: [
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      ],
    },
  },
  {
    userId: 2,
    nickname: 'nature2',
    profile: {
      picture: [
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      ],
    },
  },
  // {
  //   userId: 3,
  //   nickname: 'nature3',
  //   profile: {
  //     picture: [
  //       'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //     ],
  //   },
  // },
  // {
  //   userId: 4,
  //   nickname: 'natur4',
  //   profile: {
  //     picture: [
  //       'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //     ],
  //   },
  // },
  // {
  //   userId: 5,
  //   nickname: 'natur5',
  //   profile: {
  //     picture: [
  //       'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //       'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //     ],
  //   },
  // },
];
function Demo() {
  const { classes } = SwipeStyles();
  const [active, setActive] = useState<number>();
  const { width, height } = useViewportSize();
  const phone = useMediaQuery('(max-width:575px)');
  const tablet = useMediaQuery('(max-width:799px)');
  // console.log(active);

  useEffect(() => {}, []);
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
        {DATA.map((data, index) => {
          return (
            <SwipeCarousel key={index} setActive={setActive} data={data} />
          );
        })}
        {!tablet && <Control />}
      </Box>
      <Flex
        sx={{
          display: tablet ? 'none' : 'flex',
        }}
        className={classes.tutorial}
      >
        <div className={classes.arrow}>
          <NavLeft />
        </div>
        <div className={classes.arrow}>
          <NavUp />
        </div>
        <div className={classes.arrow}>
          <NavLeft />
        </div>
      </Flex>
      {tablet && <Nav active={active} data={DATA} />}
    </Container>
  );
}

export default Demo;

export function SwipeCarousel({ setActive, data }) {
  const slides = data.profile.picture.map((image, index) => (
    <Carousel.Slide key={index}>
      <Card image={image} radius={0} />
    </Carousel.Slide>
  ));
  const { classes } = SwipeStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Carousel
        styles={{
          root: { height: '100%', marginBottom: 50 },
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
    </>
  );
}
