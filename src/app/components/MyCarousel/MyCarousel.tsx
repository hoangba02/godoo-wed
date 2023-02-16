import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import SwipeCard from '../Swipe/SwipeCard';

import { useEffect, useMemo, useState } from 'react';
import Nav from '../Swipe/Nav';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Bio from '../Bio/Bio';
import { Card } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

interface Props {
  data: any;
  drawer?: boolean;
  setListSwipe?: any;
}
function MyCarousel({ data, drawer, setListSwipe }: Props) {
  const carouselRef = useRef<any>(null);
  const [active, setActive] = useState<number>(0);
  const [zoom, setZoom] = useState<boolean>(false);
  const [isAni, setIsAni] = useState<boolean>(false);
  console.log(zoom);
  // Other
  const { width, height } = useViewportSize();
  const listPicture = data.picture.filter(value => {
    if (value) return value;
  });
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isOnScreen = useElementOnScreen(options, carouselRef);
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  // useEffect(() => {
  //   if (isOnScreen) {
  //     autoplay.current.play();
  //   } else {
  //     autoplay.current.stop();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOnScreen]);

  useEffect(() => {
    if (carouselRef) {
      console.log(carouselRef.current.offsetWidth);
    }
  }, []);
  return (
    <motion.div
      animate={
        zoom
          ? {
              x: '100vw',
              y: 0,
              scale: 0.5,
            }
          : {
              x: '0vw',
              y: 0,
              scale: 1,
            }
      }
      transition={{ duration: 1 }}
      onTransitionEnd={() => {
        console.log('end');
      }}
    >
      <Card
        sx={{
          margin: 'auto',
          position: 'relative',
          background: 'none',
          width: zoom
            ? carouselRef.current?.offsetWidth / 5
            : carouselRef.current?.offsetWidth,
          height: zoom
            ? carouselRef.current?.offsetWidth / 5
            : carouselRef.current?.offsetHeight,
          aspectRatio: '0.626',
          padding: '0 !important',
          userSelect: 'none',
          borderRadius: zoom ? '50%' : '0%',
          zIndex: zoom ? 999 : 5,
          scrollSnapAlign: 'center',
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
            // marginBottom: 8,
            // borderRadius: 20,
            // scrollMarginTop: -50,
            // // scrollMarginBottom: 20,
            aspectRatio: `calc(${width - 30}/${height - 125})`,
          },
        }}
      >
        <Nav active={active} data={data} />
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
          // plugins={[autoplay.current]}
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
        <Bio
          data={data}
          drawer={drawer}
          onZoom={setZoom}
          // onLike={handleLikedUser}
        />
      </Card>
    </motion.div>
  );
}
export default MyCarousel;

export const useElementOnScreen = (options, targetRef) => {
  const [isOnScreen, setIsOnScreen] = useState();
  const callbackFunction = entries => {
    const [entry] = entries; //const entry = entries[0]
    setIsOnScreen(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isOnScreen;
};
