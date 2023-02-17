import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import SwipeCard from '../Swipe/SwipeCard';
import Nav from '../Swipe/Nav';
import {
  Button,
  Card,
  createStyles,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import AniMatch from '../Swipe/AniMatch';
import { useOnScreen } from 'hooks/useOnScreen';
import Profile from '../Profile/Profile';
import useModal from 'hooks/useModal';
import { ReactComponent as Gift } from 'assets/icons/home/giftBig.svg';
import { ReactComponent as Heart } from 'assets/icons/home/heart.svg';
import { ReactComponent as GiftMobile } from 'assets/icons/home/giftBigMobile.svg';
import { ReactComponent as HeartMobile } from 'assets/icons/home/heartMobile.svg';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { removeItem } from '../Functions/Functions';
import Bio from '../Bio/Bio';

interface Props {
  data: any;
  drawer?: boolean;
  setListSwipe?: any;
  listSwipe?: any;
  position?: number;
}
function MyCarousel({
  data,
  drawer,
  setListSwipe,
  listSwipe,
  position,
}: Props) {
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = useStyles();
  const carouselRef = useRef<any>(null);
  const [active, setActive] = useState<number>(0);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);
  // Other
  const { isShowing, toggle } = useModal();
  const { width, height } = useViewportSize();
  const listPicture = data.picture.filter(value => {
    if (value) return value;
  });
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isOnScreen = useOnScreen(options, carouselRef);
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const phone = useMediaQuery('(max-width:575px)', user.device, {
    getInitialValueInEffect: !user.device,
  });
  console.log(isLike);
  const handleAfterLikeUser = () => {
    // setKey(true);
    // dispatch(
    //   actions.requestLikeAction({
    //     id: user.id,
    //     token: user.token,
    //     user_2: data,
    //   }),
    // );
    // const newItems = [...listSwipe];
    // removeItem(newItems, data);
    // setListSwipe(newItems);
    setIsLike(true);
  };
  useEffect(() => {
    if (isOnScreen) {
      autoplay.current.play();
    } else {
      autoplay.current.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnScreen]);

  useEffect(() => {
    if (carouselRef) {
    }
  }, []);

  return (
    <motion.div
      layout
      animate={
        isLike && {
          scale: [1, 0.5],
          borderRadius: ['0%', '50%'],
        }
      }
      transition={{
        duration: 1,
        ease: 'easeInOut',
        times: [0, 1],
      }}
      onAnimationComplete={() => {
        console.log('end');
        setIsLike(false);
      }}
    >
      <Card
        sx={{
          margin: 'auto',
          position: 'relative',
          background: 'none',
          width: '100%',
          aspectRatio: '0.626',
          padding: '0 !important',
          userSelect: 'none',
          borderRadius: '0%',
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
          transition: 'all 1s linear',
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
            aspectRatio: `calc(${width - 30}/${height - 125})`,
          },
        }}
      >
        <Nav active={active} data={data} />
        {isMatch && <AniMatch data={data} />}
        <Carousel
          ref={carouselRef}
          styles={{
            root: { height: '100%' },
            container: {
              height: '100%',
            },
          }}
          loop
          height="100%"
          slideSize="100%"
          slideGap={0}
          draggable={listPicture.length > 1 ? true : false}
          withControls={false}
          plugins={[autoplay.current]}
          onSlideChange={value => {
            setActive(value);
          }}
        >
          {listPicture.map((item, index) => (
            <Carousel.Slide key={index}>
              <SwipeCard image={item} radius={0} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Card>
          <Profile
            fullHalf
            height={566}
            width={470}
            hide={toggle}
            isSlide={false}
            status="likedyou"
            isShowing={isShowing}
            profile={data}
            translateX={drawer ? '0%' : '40%'}
          />
          <Flex className={classes.description}>
            <Bio data={data} toggle={toggle} />
            <Stack>
              <Button
                variant="subtle"
                className={classes.swipeBtn}
                onClick={handleAfterLikeUser}
              >
                {phone ? <HeartMobile /> : <Heart />}
              </Button>
              <Button variant="subtle" className={classes.swipeBtn}>
                {phone ? <GiftMobile /> : <Gift />}
              </Button>
            </Stack>
          </Flex>
        </Card>
      </Card>
    </motion.div>
  );
}
export default MyCarousel;

const useStyles = createStyles(() => ({
  description: {
    gap: 18,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 30,
    zIndex: 7,
    // [`@media (max-width:799px)`]: {
    //   bottom: 50,
    // },
    [`@media (max-width:575px)`]: {
      bottom: 20,
      gap: 0,
    },
  },
  swipeBtn: {
    width: 'max-content !important',
    height: 'max-content !important',
    padding: 0,
    backgroundColor: 'initial',
    ':hover': {
      backgroundColor: 'initial',
    },
  },
}));
