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
import { CardSwiper } from '../CardSwiper/CardSwipe';
// import { CardSwiper } from 'react-card-rotate-swiper';

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
  const currentIndexRef = useRef(currentIndex);
  const containerRef = useRef<any>(null);

  // Function tinder
  const canGoBack = currentIndex < listSwipe.length - 1;
  const canSwipe = currentIndex >= 0;
  const updateCurrentIndex = val => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  // const swiped = (direction, swipedUser, index) => {
  //   if (direction === 'right') {
  //     // updateMatches(swipeUserId);
  //     dispatch(
  //       actions.requestLikeAction({
  //         id: user.id,
  //         token: user.token,
  //         user_2: swipedUser,
  //       }),
  //     );
  //   }
  //   updateCurrentIndex(index - 1);
  // };
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
  // useEffect(() => {
  //   containerRef.current.addEventListener('wheel', event => {
  //     const delta = Math.sign(event.deltaY);
  //     console.info(delta);
  //     if (delta === 1) {
  //       toggle();
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentIndex]);
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
          fullHalf
          height={566}
          width={470}
          hide={toggle}
          isSlide={false}
          status="likedyou"
          isShowing={isShowing}
          profile={listSwipe[currentIndex]}
          translateX={drawer ? '0%' : '40%'}
        />
      )}

      <Flex className={classes.nav}>
        <button
          className={classes.btn}
          // onClick={(): void => {
          //   goBack();
          // }}
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
        {listSwipe.reverse().map((data, index) => {
          return (
            <CardSwiper
              key={index}
              className={classes.swipe}
              detectingSize={300}
              throwLimit={5000}
              contents={
                <Card
                  className={classes.draggable}
                  sx={{
                    height: 'max-content',
                    background: 'none',
                    borderRadius: '20px !important',
                    zIndex: index,
                    '::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      width: '100%',
                      height: '50%',
                      borderRadius: 20,
                      background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.567573) 48.44%, rgba(0, 0, 0, 0.79) 73.44%, rgba(0, 0, 0, 0.772727) 89.58%, rgba(0, 0, 0, 0.47) 100%)',
                      zIndex: 6,
                    },
                    '::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 20,
                      background: 'transparent',
                      zIndex: 5,
                    },
                    [`@media (max-width:575px)`]: {
                      aspectRatio: `calc(${width - 30}/${height - 143})`,
                    },
                  }}
                >
                  <MyCarousel setActive={setActive} data={data} />
                  <Flex className={classes.bio}>
                    <BioDescription data={data} />
                    <Gift />
                  </Flex>
                </Card>
              }
            />
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
