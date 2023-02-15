import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import SwipeCard from '../Swipe/SwipeCard';

import { useEffect, useMemo, useState } from 'react';
import Nav from '../Swipe/Nav';

function MyCarousel({ data }) {
  const carouselRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState<number>(0);

  // Other
  const listPicture = data.picture.filter(value => {
    if (value) return value;
  });
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, carouselRef);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  // useEffect(() => {
  //   if (isVisibile) {
  //     if (!playing) {
  //       autoplay.current.play();
  //       setPlaying(true);
  //     }
  //   } else {
  //     if (playing) {
  //       autoplay.current.stop();
  //       setPlaying(false);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isVisibile]);
  return (
    <>
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
        draggable={true}
        withControls={false}
        plugins={[autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseUp={() => {
        //   autoplay.current.play();
        // }}
        onSlideChange={value => {
          console.log(value);
          setActive(value);
        }}
      >
        {listPicture.map((item, index) => (
          <Carousel.Slide key={index}>
            <SwipeCard image={item} radius={0} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}
export default MyCarousel;

export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = entries => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
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
  return isVisibile;
};
