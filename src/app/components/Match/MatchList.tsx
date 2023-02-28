import React, { useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Container, createStyles, Text } from '@mantine/core';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import Card from '../Swipe/SwipeCard';

function MatchList({ matchList }) {
  const { classes } = makeStyles();
  const ipad = useMediaQuery('(min-width:800px) and (max-width:991px)');

  useEffect(() => {}, []);
  return (
    <Container fluid className={classes.container}>
      <Text className={classes.text}>
        {`Pairing list (${matchList.length})`}
      </Text>
      <Carousel
        styles={{
          root: {
            height: 107,
            '::before': {
              content: '""',
              position: 'absolute',
              right: -1,
              height: '100%',
              width: '5%',
              background:
                'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.22) 82%, rgba(255, 255, 255, 0) 100%)',
              zIndex: 1,
            },
          },
          container: {
            height: '100%',
          },
          controls: {
            justifyContent: 'flex-end',
          },
          control: {
            color: '#FFFFFF',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 3,
            '&:first-of-type': {
              display: 'none',
            },
          },
          slide: {
            '&:first-of-type div': {
              position: 'relative',
              border: '2px solid rgba(228,97,37,1)',
            },
          },
        }}
        loop
        align="start"
        height="100%"
        slideSize="25.5%"
        slideGap={12}
        draggable={false}
        withControls={true}
        controlsOffset={0}
        slidesToScroll={1}
        nextControlIcon={<IconChevronRight stroke={2.5} />}
        previousControlIcon={<IconChevronLeft stroke={2.5} />}
        breakpoints={[
          { maxWidth: 991, slideSize: '33%' },
          { maxWidth: 800, slideSize: '25.5%' },
        ]}
      >
        {matchList.map((item, index) => (
          <Carousel.Slide key={index}>
            <Card data={item} image={item.picture[0]} radius={8} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}

export default MatchList;

const makeStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: '100%',
    height: 140,
    padding: 0,
    marginTop: 12,
  },
  text: {
    color: '#E46125',
    fontSize: 18,
    lineHeight: '22px',
    marginBottom: 10,
  },
  border: {
    height: 112,
    position: 'absolute',
    left: -3,
    bottom: -1,
    borderRadius: 8,
    background:
      'linear-gradient(0deg, rgba(228,97,37,1) 0%, rgba(201,26,68,1) 100%)',
    zIndex: -1,
    '::after': {
      content: '""',
      position: 'absolute',
      left: 3,
      top: 3,
      height: 'calc(100% - 6px)',
      width: 'calc(100% - 6px)',
      borderRadius: 8,
      background: 'var(--white)',
      zIndex: 1,
    },
  },
}));
