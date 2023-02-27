import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SwipeStyles } from './SwipeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Container, Flex, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { motion } from 'framer-motion';

import { FilterUser } from './FilterUser';
import { apiGet } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';
import MyCarousel from '../MyCarousel/MyCarousel';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import AniLiked from './AniLiked';

interface Props {
  drawer?: boolean;
}
function Swipe({ drawer }: Props) {
  // Others
  // const dispatch = useDispatch();
  // const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = SwipeStyles();
  const { width, height } = useViewportSize();
  // State
  const containerRef = useRef<any>(null);
  const [listSwipe, setListSwipe] = useState<any>([]);
  const [imgLike, setImgLike] = useState<string>('');

  const handleLikedUser = isLiked => {
    // dispatch(
    //   actions.requestLikeAction({
    //     id: user.id,
    //     token: user.token,
    //     user_2: isLiked,
    //   }),
    // );
  };
  useLayoutEffect(() => {
    apiGet('/v1/godoo/swipe/randomfriend', {
      userid: user.id,
      token: user.token,
    })
      .then(res => {
        console.log(res);
        // let newListSwipe = res.data.filter(value => value.picture.length !== 0);
        // setListSwipe(newListSwipe);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    containerRef.current.addEventListener('wheel', event => {
      const delta = Math.sign(event.deltaY);
      if (delta === 1) {
        console.log('swipe');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      ref={containerRef}
      fluid
      className={classes.container}
      sx={{
        transition: 'all 0.5s linear',
        aspectRatio: '0.67',
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width}/${height - 75})`,
          width: '100%',
          margin: 0,
        },
      }}
    >
      <Flex className={classes.nav}>
        <FilterUser drawer={drawer} />
      </Flex>
      {imgLike && <AniLiked img={imgLike} setImgLike={setImgLike} />}
      <Container
        sx={{
          [`@media (max-width:575px)`]: {
            height: 'auto',
            // borderRadius: 0,
            aspectRatio: `calc(${width}/${height - 80})`,
          },
        }}
        fluid
        className={classes.swipe}
      >
        <Stack className={classes.overlay}>
          {listSwipe.map((data, index) => {
            return (
              <MyCarousel
                key={index}
                data={data}
                drawer={drawer}
                setListSwipe={setListSwipe}
                listSwipe={listSwipe}
                setImgLike={setImgLike}
              />
            );
          })}
        </Stack>
      </Container>
    </Container>
  );
}

export default Swipe;
