import React, { useState } from 'react';
import {
  motion,
  useAnimation,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { Card, Container, createStyles, Flex, Paper } from '@mantine/core';
// import Draggable from 'react-draggable';
import { useViewportSize } from '@mantine/hooks';
interface Props {
  data?: any;
  onSwipe?: any;
  animControls?: any;
  x?: any;
}
function Test({ data, onSwipe, animControls, x }: Props, ref) {
  const { classes } = useStyles();
  const { width } = useViewportSize();
  const [position, setPosition] = useState({ left: 0, right: 0 });
  const dragControls = useDragControls();
  const rotate = useTransform(x, [-500, 500], [-15, 15]);
  const opacity = useTransform(x, [-500, -250, 0, 250, 500], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      drag
      style={{ x, rotate }}
      dragConstraints={{
        left: position.left,
        right: position.right,
        top: 0,
        bottom: 0,
      }}
      onDragEnd={(event, info) => {
        if (Math.abs(info.point.x) <= 300) {
          animControls.start({ x: 0 });
        } else {
          if (info.point.x < 0) {
            onSwipe('left');
          } else {
            onSwipe('right');
          }
        }
      }}
      className={classes.wrapper}
    >
      <Card className={classes.content} ref={ref}>
        <Paper
          shadow="md"
          radius={20}
          sx={{
            position: 'absolute',
            backgroundImage: `url(${data.picture[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={classes.card}
        />
      </Card>
    </motion.div>
  );
}
const Demo = React.forwardRef(Test);

export default Demo;
const useStyles = createStyles(() => ({
  content: {
    width: '100%',
    height: '100%',
    padding: '0px !important',
    position: 'absolute',
  },
  wrapper: {
    position: 'absolute',
    width: 470,
    height: 700,
    overflow: 'initial',
  },
  card: {
    width: '100%',
    height: '100%',
    padding: '0px !important',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
  },
}));
