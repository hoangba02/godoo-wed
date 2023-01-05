import { Card, Center, createStyles, Flex, Paper } from '@mantine/core';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';
function Demo2() {
  const { classes } = useStyles();
  const [picture, setPicture] = useState([
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
        ],
      },
    },
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/98/76/1b/98761b431a9f80b43199bb38d044b396.jpg',
        ],
      },
    },
  ]);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(-1);
  const [translate, setTranslate] = useState('');
  const [rotateZ, setRotateZ] = useState('');
  const [offsetDrag, setOffsetDrag] = useState(0);
  const [offsetDragEnd, setOffsetDragEnd] = useState(0);
  const [overlay, setOverlay] = useState('');

  const childRefs = useMemo(
    () =>
      Array(picture.length)
        .fill(0)
        .map(i => React.createRef()),
    [],
  );
  const dragStart = position => {
    childRefs[position] = position;
    dragItem.current = position;
    dragOverItem.current = position;
  };
  const dragEnd = (event, info, position) => {
    // console.log(info.point.x);
    setOffsetDragEnd(info.offset.x);
    if (info.offset.x > 900 || info.offset.x < -900) {
      setPicture(picture.filter((value, index) => index !== position));
    }
  };
  const drag = (event, info) => {
    setOffsetDrag(info.offset.x);
  };
  // const y = useMotionValue(0);

  // const background = useTransform(
  //   y,
  //   [-400, 0, 400],
  //   [
  //     'linear-gradient(90deg, rgba(0, 0, 0, 0.87) 0%, rgba(255, 255, 255, 0) 108.76%)',
  //     'transparent',
  //     'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)',
  //   ],
  // );

  const dragTransitionEnd = position => {
    setPicture(picture.filter((value, index) => index !== position));
  };
  const variantsAfter = {
    initial: { translateX: 0, rotateZ: 0 },
    animationRight: {
      translateX: '100vw',
      rotateZ: 15,
      // translate:""
      transition: { duration: 1 },
    },
    animationLeft: {
      translateX: '-100vw',
      rotateZ: -15,
      transition: { duration: 1 },
    },
  };
  // console.log(picture);
  return (
    <Center className={classes.container}>
      <Flex className={classes.swipe}>
        <motion.div className={classes.wrapper} ref={wrapperRef}>
          {picture.map((value, index) => (
            <motion.div
              drag
              dragListener={false}
              key={index}
              ref={e => childRefs[index]}
              dragElastic={1}
              dragConstraints={wrapperRef}
              onDragStart={() => dragStart(index)}
              onDragEnd={(event, info) => dragEnd(event, info, index)}
              onDrag={drag}
              // onDragTransitionEnd={() => dragTransitionEnd(index)}
              onDragOver={() => console.log('first')}
              className={classes.draggable}
              initial="initial"
              animate={
                offsetDragEnd > 800
                  ? 'animationRight'
                  : offsetDragEnd < -800
                  ? 'animationLeft'
                  : 'initial'
              }
              whileTap={
                offsetDrag > 1
                  ? {
                      rotateZ: 15,
                    }
                  : offsetDrag < -1
                  ? {
                      rotateZ: -15,
                    }
                  : {
                      rotateZ: 0,
                    }
              }
              // style={dragItem.current === index ? { x } : undefined}
              variants={dragItem.current === index ? variantsAfter : undefined}
            >
              {/* <motion.div
              className={classes.overlay}
              style={dragItem.current === index ? { background } : undefined}
            ></motion.div> */}
              <Paper
                shadow="md"
                radius={20}
                sx={{
                  // position: 'relative',
                  backgroundImage: `url(${value.profile.picture[0]})`,
                  backgroundSize: 'cover',

                  // '::before': {
                  //   content: '""',
                  //   position: 'absolute',
                  //   inset: 0,
                  //   borderRadius: 20,
                  //   background:
                  //     overlay === 'right'
                  //       ? 'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)'
                  //       : overlay === 'left'
                  //       ? 'linear-gradient(90deg, rgba(0, 0, 0, 0.87) 0%, rgba(255, 255, 255, 0) 108.76%)'
                  //       : 'transparent',
                  // },
                }}
                className={classes.page}
              />
            </motion.div>
          ))}
        </motion.div>
      </Flex>
    </Center>
  );
}

export default Demo2;

const useStyles = createStyles(() => ({
  safeArea: {
    position: 'relative',
    width: 500,
    height: 500,
    background: '#ccc',
  },
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  swipe: {
    position: 'relative',
    width: 470,
    height: 650,
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  draggable: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
    zIndex: 10,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 11,
  },

  page: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
  },
}));
