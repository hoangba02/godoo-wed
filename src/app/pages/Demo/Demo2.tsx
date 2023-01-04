import { Card, Center, createStyles, Flex, Paper } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import {
  motion,
  useAnimationControls,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';

function Demo2() {
  const { classes } = useStyles();
  const [picture, setPicture] = useState([
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/98/76/1b/98761b431a9f80b43199bb38d044b396.jpg',
        ],
      },
    },
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/af/1d/f9/af1df9d971e18030e7586f367870e44d.jpg',
        ],
      },
    },
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/af/1d/f9/af1df9d971e18030e7586f367870e44d.jpg',
        ],
      },
    },
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/18/a7/a8/18a7a8200eed42503b351bc67ca74249.jpg',
        ],
      },
    },
    {
      profile: {
        picture: [
          'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
        ],
      },
    },
  ]);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
    'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)',
  ]);
  return (
    <motion.div style={{ background }}>
      <Center className={classes.container}>
        <Flex className={classes.swipe}>
          {picture.map((value, index) => (
            <motion.div
              key={index}
              drag
              dragElastic={1}
              dragConstraints={{
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }}
              style={{ x }}
              // onDragStart={}
              // animate={{ transform: 'rotate(90deg)' }}
            >
              <Card className={classes.card}>
                <Paper
                  shadow="md"
                  radius={20}
                  sx={{ backgroundImage: `url(${value.profile.picture[0]})` }}
                  className={classes.page}
                />
              </Card>
            </motion.div>
          ))}
        </Flex>
      </Center>
    </motion.div>
  );
}

export default Demo2;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  swipe: {
    position: 'relative',
    // width: 200,
    // height: 200,
  },
  card: {
    width: 200,
    height: 200,
    padding: '0px !important',
    background: 'transparent',
    position: 'relative',
    borderRadius: 20,
  },
  page: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 99,
  },
}));
