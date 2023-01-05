import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Center, Container, Flex, Text, Title, Card } from '@mantine/core';

import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { ReactComponent as NavLeft } from 'assets/icons/narrowLeft.svg';
import { ReactComponent as NavUp } from 'assets/icons/narrowUp.svg';
import { SwipeStyles } from 'app/components/Swipe/SwipeStyles';
import { FilterUser } from 'app/components/Swipe/FilterUser';
import Nav from 'app/components/Swipe/Nav';
import Control from 'app/components/Swipe/Control';
import { DemoStyles } from './DemoStyles';
import TinderCard from 'react-tinder-card';
import {
  motion,
  useAnimationControls,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import SwipeCard from 'app/components/Swipe/SwipeCard';

const DATA = [
  {
    userId: 1,
    nickname: 'nature1',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
        'https://i.pinimg.com/236x/72/f8/12/72f8122584d5ebc91d65682d38050ef4.jpg',
        'https://i.pinimg.com/236x/be/05/50/be0550911da79e4cc02e8b8fd16ca9a4.jpg',
        'https://i.pinimg.com/236x/3d/74/63/3d74639d40ae75295fd25719ce35b886.jpg',
      ],
    },
  },
  {
    userId: 2,
    nickname: 'nature2',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/98/76/1b/98761b431a9f80b43199bb38d044b396.jpg',
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
      ],
    },
  },
  {
    userId: 3,
    nickname: 'nature3',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/24/55/5a/24555abc6290a637787a08110f8fbab9.jpg',
        'https://i.pinimg.com/236x/72/f8/12/72f8122584d5ebc91d65682d38050ef4.jpg',
        'https://i.pinimg.com/236x/01/ec/6b/01ec6b79228e3960abd78717e9159c3a.jpg',
      ],
    },
  },
  {
    userId: 4,
    nickname: 'natur4',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/be/05/50/be0550911da79e4cc02e8b8fd16ca9a4.jpg',
        'https://i.pinimg.com/236x/24/55/5a/24555abc6290a637787a08110f8fbab9.jpg',
      ],
    },
  },
  {
    userId: 5,
    nickname: 'natur5',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/af/1d/f9/af1df9d971e18030e7586f367870e44d.jpg',
        'https://i.pinimg.com/236x/01/ec/6b/01ec6b79228e3960abd78717e9159c3a.jpg',
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
      ],
    },
  },
];
function Demo() {
  const { classes } = DemoStyles();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');

  const [active, setActive] = useState<number>();
  const [dragIndex, setDragIndex] = useState(-1);
  // Array chứa picture user
  const [picture, setPicture] = useState(DATA);
  // Motion
  const x = useMotionValue(0);
  const dragControls = useDragControls();
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(90deg, rgba(0, 0, 0, 0.87) 0%, rgba(255, 255, 255, 0) 108.76%)',
    'transparent',
    'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)',
  ]);
  // Function Swipe
  const swiped = (direction, userId) => {};

  const outOfFrame = userId => {
    console.log(userId + ' left the screen!');
    setPicture(picture.filter(value => value.userId !== userId));
  };

  // Function Motion
  function startDrag(event, index) {
    // console.log(childRefs[index]);
    console.log(event.pageY);
    dragControls.start(event);
  }
  const handleDrag = index => {
    console.log('Drag Start');
    setDragIndex(index);
    console.log(index);
  };
  const handleDragEnd = e => {
    console.log('Drag End');
    setActive(-1);
  };
  return (
    <Center
      sx={{
        height: '100%',
        overflow: 'hidden',
      }}
    >
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
          {!tablet && (
            <Nav
              active={active}
              lengths={picture[picture.length - 1].profile.picture.length}
            />
          )}
          <FilterUser />
        </Flex>
        <Flex className={classes.swipes}>
          {picture.map((data, index) => {
            return (
              <TinderCard
                key={data.userId}
                className={classes.card}
                // swipeRequirementType="position"
                // swipeThreshold={400}
                onSwipe={dir => swiped(dir, data.userId)}
                onCardLeftScreen={() => outOfFrame(data.userId)}
                preventSwipe={['up', 'down']}
              >
                <motion.div
                  key={index}
                  // ref={() => childRefs[index]}
                  drag
                  dragElastic={1}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                  }}
                  style={dragIndex === index ? { x } : undefined}
                  // onPointerDown={e => startDrag(e, index)}
                  onDragStart={() => {
                    handleDrag(index);
                  }}
                  onDragEnd={() => {
                    handleDragEnd(index);
                  }}
                >
                  <motion.div
                    className={classes.overlay}
                    style={dragIndex === index ? { background } : undefined}
                    // custom={index}
                    transition={{ duration: 1 }}
                  ></motion.div>
                  <SwipeCarousel
                    setActive={setActive}
                    data={data}
                    autoPlay={dragIndex === index ? true : false}
                  />
                </motion.div>
              </TinderCard>
            );
          })}
        </Flex>
        {!tablet && <Control />}
        {tablet && (
          <Nav
            active={active}
            lengths={picture[picture.length - 1].profile.picture.length}
          />
        )}
      </Container>
    </Center>
  );
}

export default Demo;

export function SwipeCarousel({ setActive, data, autoPlay }) {
  console.log(autoPlay);
  const slides = data.profile.picture.map((image, index) => (
    <Carousel.Slide key={index}>
      <SwipeCard image={image} radius={0} />
    </Carousel.Slide>
  ));
  const { classes } = DemoStyles();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
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
          plugins={!autoPlay ? [autoplay.current] : []}
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
      </Box>
    </>
  );
}
