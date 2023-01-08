import React, { useRef, useState } from 'react';
import { SwipeStyles } from './SwipeStyles';
import { Card, Container, Flex } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import Nav from './Nav';
import { FilterUser } from './FilterUser';
import SwipeTutorial from './SwipeTutorial';
import Control from './Control';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import MyCarousel, { BioDescription } from '../MyCarousel/MyCarousel';
import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';

function Swipe() {
  const characters = [
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
  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const childRefs = useRef<any>({});
  // Others
  const { classes } = SwipeStyles();
  const [active, setActive] = useState<number>();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  const user = useSelector(getUserSelector);
  // State
  const currentIndexRef = useRef(currentIndex);
  const canGoBack = currentIndex < characters.length - 1;
  const canSwipe = currentIndex >= 0;
  const [lastDirection, setLastDirection] = useState();

  // Function tinder

  const updateCurrentIndex = val => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const updateMatches = async matchesUserId => {
    try {
      console.log('start');
      await axios
        .post(
          'https://ttvnapi.com/v1/godoo/match/like',
          {
            // user_id_2: matchesUserId,
            user_id_2: 28,
          },
          {
            headers: {
              // userid:   user.id,
              // token: user.token,
              userid: 101,
              token: 'dsqh6c1o9j95cbw7031ux0afhras9ydy',
            },
          },
        )
        .then(res => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const swiped = (direction, swipeUserId, index) => {
    console.log('removing: ' + swipeUserId);
    console.log(childRefs.current[currentIndex]);

    if (direction === 'right') {
      updateMatches(swipeUserId);
    }
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };
  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs.current[newIndex].restoreCard();
  };
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
        <button
          className={classes.btn}
          onClick={(): void => {
            goBack();
          }}
        >
          <Undo />
        </button>
        {!tablet && <Nav active={active} lengths={3} />}
        <FilterUser />
      </Flex>
      <Flex
        sx={{
          width: '100%',
          height: 'calc(470px /0.69)',
          [`@media (max-width:575px)`]: {
            height: 'max-content',
          },
        }}
        className={classes.overlay}
      >
        {characters.map((character, index) => {
          return (
            <TinderCard
              ref={(el: never) => (childRefs.current[index] = el)}
              className={classes.swipe}
              key={character.nickname}
              swipeRequirementType="position"
              preventSwipe={['up', 'down']}
              swipeThreshold={300}
              onSwipe={dir => swiped(dir, character.userId, index)}
              onCardLeftScreen={() => outOfFrame(character.nickname)}
            >
              <Card
                className={classes.draggable}
                sx={{
                  height: 'max-content',
                  background: 'none',
                  borderRadius: '20px !important',
                  zIndex: 5,

                  '::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 20,
                    background: 'transparent',
                    zIndex: 6,
                  },
                  [`@media (max-width:575px)`]: {
                    aspectRatio: `calc(${width - 30}/${height - 143})`,
                  },
                }}
              >
                <MyCarousel
                  key={character.userId}
                  setActive={setActive}
                  data={character.profile.picture}
                />
                <Flex className={classes.bio}>
                  <BioDescription />
                  <Gift />
                </Flex>
              </Card>
            </TinderCard>
          );
        })}
      </Flex>
      {!tablet && (
        <Control
          childRefs={childRefs}
          currentIndex={currentIndex}
          canSwipe={canSwipe}
          length={characters.length}
        />
      )}
      <SwipeTutorial />
      {tablet && <Nav active={active} lengths={3} />}
    </Container>
  );
}

export default Swipe;
