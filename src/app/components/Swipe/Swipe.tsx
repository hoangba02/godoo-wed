import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SwipeStyles } from './SwipeStyles';
import { Card, Container, Flex } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import Nav from './Nav';
import { FilterUser } from './FilterUser';
import SwipeTutorial from './SwipeTutorial';
import Control from './Control';
import TinderCard from 'react-tinder-card';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import MyCarousel, { BioDescription } from '../MyCarousel/MyCarousel';
import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import { ReactComponent as Gift } from 'assets/icons/box.svg';
import { motion } from 'framer-motion';
import { apiGet } from 'utils/http/request';
import Profile from '../Profile/Profile';
import useModal from 'hooks/useModal';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  drawer?: boolean;
}
function Swipe({ drawer }: Props) {
  const childRefs = useRef<any>({});
  // Others
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  const { classes } = SwipeStyles();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  const phone = useMediaQuery('(max-width:575px)');
  // State
  const { isShowing, toggle } = useModal();
  const [active, setActive] = useState<number>();
  const [listSwipe, setListSwipe] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(listSwipe.length - 1);
  const [offsetDrag, setOffsetDrag] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const containerRef = useRef<any>(null);

  // Function tinder
  const canGoBack = currentIndex < listSwipe.length - 1;
  const canSwipe = currentIndex >= 0;
  const updateCurrentIndex = val => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const swiped = (direction, swipedUser, index) => {
    if (direction === 'right') {
      // updateMatches(swipeUserId);
      dispatch(
        actions.requestLikeAction({
          id: user.id,
          token: user.token,
          user_2: swipedUser,
        }),
      );
    }
    updateCurrentIndex(index - 1);
  };
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs.current[newIndex].restoreCard();
  };
  // Motion function
  const drag = (event, info) => {
    setOffsetDrag(info.offset.x);
    console.log(info.offset.x);
  };
  useLayoutEffect(() => {
    apiGet('/v1/godoo/swipe/randomfriend', {
      userid: user.id,
      token: user.token,
    })
      .then(res => {
        let newListSwipe = res.data.filter(value => value.picture.length !== 0);
        setListSwipe(newListSwipe);
        setCurrentIndex(newListSwipe.length - 1);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    containerRef.current.addEventListener('wheel', event => {
      const delta = Math.sign(event.deltaY);
      console.info(delta);
      if (delta === 1) {
        toggle();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  return (
    <Container
      ref={containerRef}
      fluid
      className={classes.container}
      sx={{
        aspectRatio: '0.67',
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width}/${height - 65})`,
        },
      }}
    >
      {listSwipe[currentIndex] && (
        <Profile
          hide={toggle}
          isSlide={false}
          isShowing={isShowing}
          status="likedyou"
          profile={listSwipe[currentIndex]}
          height={566}
          width={470}
          translateX={drawer ? '0%' : '40%'}
        />
      )}

      <Flex className={classes.nav}>
        <button
          className={classes.btn}
          onClick={(): void => {
            goBack();
          }}
        >
          <Undo />
        </button>
        {!tablet && listSwipe[currentIndex] && (
          <Nav active={active} data={listSwipe[currentIndex]} />
        )}
        <FilterUser drawer={drawer} />
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
        {listSwipe.map((data, index) => {
          return (
            <TinderCard
              ref={(el: never) => (childRefs.current[index] = el)}
              className={classes.swipe}
              key={index}
              swipeRequirementType="position"
              preventSwipe={['up', 'down']}
              swipeThreshold={phone ? 150 : 300}
              onSwipe={dir => swiped(dir, data, index)}
            >
              <motion.div
              // drag
              // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              // onDrag={drag}
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
                    key={data.userId}
                    setActive={setActive}
                    data={data}
                  />
                  <Flex className={classes.bio}>
                    <BioDescription data={data} />
                    <Gift />
                  </Flex>
                </Card>
              </motion.div>
            </TinderCard>
          );
        })}
        {!tablet && (
          <Control
            childRefs={childRefs}
            currentIndex={currentIndex}
            canSwipe={canSwipe}
            length={listSwipe.length}
          />
        )}
      </Flex>

      <SwipeTutorial />
      {tablet && listSwipe[currentIndex] && (
        <Nav active={active} data={listSwipe[currentIndex]} />
      )}
    </Container>
  );
}

export default Swipe;
