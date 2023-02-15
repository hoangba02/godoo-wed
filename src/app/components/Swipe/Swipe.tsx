import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SwipeStyles } from './SwipeStyles';
import { Card, Container, Flex, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import Bio from '../Bio/Bio';
import { FilterUser } from './FilterUser';
import { apiGet } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';
import MyCarousel from '../MyCarousel/MyCarousel';
import { getUserSelector } from 'store/slice/userSlice/selectors';

interface Props {
  drawer?: boolean;
}
function Swipe({ drawer }: Props) {
  // Others
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  const { classes } = SwipeStyles();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  const phone = useMediaQuery('(max-width:575px)');
  // State

  const [listSwipe, setListSwipe] = useState<any>([]);
  const containerRef = useRef<any>(null);

  const handleLikedUser = isLiked => {
    console.log('like');
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
        console.log(res.data);
        let newListSwipe = res.data.filter(value => value.picture.length !== 0);
        setListSwipe(newListSwipe);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   containerRef.current.addEventListener('wheel', event => {
  //     const delta = Math.sign(event.deltaY);
  //     if (delta === 1) {
  //       console.log('swipe');
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
      <Flex className={classes.nav}>
        <FilterUser drawer={drawer} />
      </Flex>
      <Container fluid className={classes.swipe}>
        <Stack className={classes.overlay}>
          {listSwipe.map((data, index) => {
            return (
              <Card
                key={index}
                sx={{
                  background: 'none',
                  width: '100%',
                  aspectRatio: '0.626',
                  padding: '0 !important',
                  userSelect: 'none',
                  borderRadius: 0,
                  zIndex: 5,
                  scrollSnapAlign: 'center',
                  scrollSnapStop: 'always',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    height: '50%',
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.567573) 48.44%, rgba(0, 0, 0, 0.79) 73.44%, rgba(0, 0, 0, 0.772727) 89.58%, rgba(0, 0, 0, 0.47) 100%)',
                    zIndex: 6,
                  },
                  [`@media (max-width:575px)`]: {
                    aspectRatio: `calc(${width - 30}/${height - 143})`,
                  },
                }}
              >
                <MyCarousel key={data.userId} data={data} />
                <Bio data={data} drawer={drawer} onLike={handleLikedUser} />
              </Card>
            );
          })}
        </Stack>
      </Container>
    </Container>
  );
}

export default Swipe;
