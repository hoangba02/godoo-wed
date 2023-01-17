import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, Container, createStyles, Flex, Paper } from '@mantine/core';
interface Props {
  data?: any;
}
function Demo({ data }: Props) {
  const { classes } = useStyles();
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(90deg, rgba(0, 0, 0, 0.87) 0%, rgba(255, 255, 255, 0) 108.76%)',
    'transparent',
    'linear-gradient(90deg, rgba(228, 97, 37, 0) 54.32%, rgba(228, 97, 37, 0.51) 80.87%, rgba(201, 26, 68, 0.96) 109.52%)',
  ]);
  const color = useTransform(x, xInput, [
    'rgb(211, 9, 225)',
    'rgb(68, 0, 255)',
    'rgb(3, 209, 0)',
  ]);
  // const  = useTransform(x, xInput, [
  //   'rgb(211, 9, 225)',
  //   'rgb(68, 0, 255)',
  //   'rgb(3, 209, 0)',
  // ]);
  return (
    <motion.div
      className={classes.wrapper}
      // style={{ x }}
      drag="x"
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          console.log('first');
        }
      }}
      dragConstraints={{ left: 0, right: 0 }}
    >
      <Card className={classes.content}>
        <motion.div style={{ background }} className={classes.overlay} />
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

export default Demo;
const useStyles = createStyles(() => ({
  content: {
    width: '100%',
    height: '100%',
    padding: '0px !important',
    position: 'relative',
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
