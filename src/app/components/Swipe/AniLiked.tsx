import React, { useEffect, useRef, useState } from 'react';
import { Avatar, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

interface Props {
  img: string;
  setImgLike: any;
}
function AniLiked({ img, setImgLike }: Props) {
  const user = useSelector(getUserSelector);
  // local
  const imgRef = useRef<any>(null);
  const [fly, setFly] = useState({ left: 0, top: 0 });

  const { classes } = useStyles();
  useEffect(() => {
    setFly({
      left:
        user.point.left -
        (user.point.width / 2 +
          imgRef.current?.getBoundingClientRect().left +
          imgRef.current?.getBoundingClientRect().width / 2),
      top: user.point.top - imgRef.current?.getBoundingClientRect().top,
    });
  }, []);
  return (
    <motion.div
      ref={imgRef}
      initial={{ x: 0, y: 0, width: 100, height: 100 }}
      animate={{
        x: fly.left,
        y: fly.top,
        width: 50,
        height: 50,
      }}
      exit={{ x: 0, y: 0, width: 100, height: 100 }}
      transition={{ type: 'spring', duration: 2, delay: 0.5 }}
      onAnimationComplete={() => {
        setImgLike('');
      }}
      className={classes.img}
    >
      <Avatar
        // ref={imgRef}
        src={img}
        className={classes.avatar}
      />
    </motion.div>
  );
}

export default AniLiked;

const useStyles = createStyles(() => ({
  img: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 999,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
}));
