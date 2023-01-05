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
  // const constraintsRef = useRef(null);
  const [active, setActive] = useState(-1);
  const [translate, setTranslate] = useState('');
  const [rotateZ, setRotateZ] = useState('');
  const [overlay, setOverlay] = useState('');
  const [constraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  });

  const dragStart = (e, info, position) => {
    console.log(info.offset);
    dragItem.current = position;
  };
  const dragEnd = (event, info) => {
    // console.log(info.offset.x);
    if (info.offset.x > 400) {
      setTranslate('right');
      setConstraints({
        top: 0,
        bottom: 0,
        right: info.offset.x,
        left: 0,
      });
    } else if (info.offset.x < -400) {
      setTranslate('left');
      setConstraints({
        top: 0,
        bottom: 0,
        right: 0,
        left: info.offset.x,
      });
    } else {
      setTranslate('');
      setConstraints({
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      });
    }

    // console.log(first)
    // setPicture(picture.filter((value, index) => index !== position));
  };
  const drag = (event, info) => {
    if (info.offset.x > 0) {
      setRotateZ('right');
    } else if (info.offset.x < 0) {
      setRotateZ('left');
    } else {
      setRotateZ('');
    }
  };
  const y = useMotionValue(0);

  const background = useTransform(
    y,
    [-400, 0, 400],
    [
      'linear-gradient(90deg, rgba(0, 0, 0, 0.87) 0%, rgba(255, 255, 255, 0) 108.76%)',
      'transparent',
      'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)',
    ],
  );
  const variants = {
    initial: { x: 0 },
    animationRight: {
      x: '100vw',
      // translate:""
      transition: { duration: 1 },
    },
    animationLeft: {
      x: '-100vw',
      transition: { duration: 1 },
    },
  };
  console.log(translate);
  return (
    <Center className={classes.container}>
      <Flex className={classes.swipe}>
        {picture.map((value, index) => (
          <motion.div
            drag
            key={index}
            dragElastic={1}
            dragConstraints={constraints}
            onDragStart={(e, info) => dragStart(e, info, index)}
            onDragEnd={dragEnd}
            onDrag={drag}
            className={classes.draggable}
            initial="initial"
            animate={
              translate === 'right'
                ? 'animationRight'
                : translate === 'left'
                ? 'animationLeft'
                : 'initial'
            }
            whileTap={
              rotateZ === 'right'
                ? {
                    rotateZ: 15,
                  }
                : rotateZ === 'left'
                ? {
                    rotateZ: -15,
                  }
                : {
                    rotateZ: 0,
                  }
            }
            // style={dragItem.current === index ? { x } : undefined}
            variants={dragItem.current === index ? variants : undefined}
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
