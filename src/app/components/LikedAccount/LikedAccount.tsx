import React from 'react';
import {
  Button,
  createStyles,
  Group,
  Overlay,
  Paper,
  Text,
} from '@mantine/core';
import { ReactComponent as Heart } from 'assets/icons/home/heart.svg';
import Profile from '../Profile/Profile';
import useModal from 'hooks/useModal';
import { motion } from 'framer-motion';

interface Props {
  data: any;
  isLiked?: string;
}
function LikedAccount({ data, isLiked }: Props) {
  const { classes } = makeStyles();
  const { isShowing, toggle } = useModal();
  const handleGiveGift = (e, receiveUserId) => {
    e.stopPropagation();
    console.log(receiveUserId);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Profile
        isShowing={isShowing}
        hide={toggle}
        status={isLiked}
        profile={data}
        translateX="0"
      />
      <Paper
        shadow="md"
        radius={0}
        sx={{
          backgroundImage: `url(${data.picture[0]})`,
        }}
        className={classes.card}
        onClick={toggle}
      >
        <Overlay
          sx={{
            borderRadius: 8,
            zIndex: 1,
          }}
          gradient={`linear-gradient(180deg, rgba(255, 255, 255, 0) -39.78%, rgba(255, 255, 255, 0.1) 29%, #000000 100%)`}
        />
        <Group className={classes.content}>
          <Text className={classes.category} size="xs">
            {data.nickname}
          </Text>
          <Text lineClamp={2} className={classes.title}>
            {data.introduction}
          </Text>
        </Group>
        <Button
          variant="subtle"
          className={classes.gift}
          onClick={e => handleGiveGift(e, data.userId)}
        >
          <Heart width="100%" height="100%" />
        </Button>
      </Paper>
    </motion.div>
  );
}

export default LikedAccount;

const makeStyles = createStyles(() => ({
  card: {
    minWidth: 147,
    maxWidth: 147,
    minHeight: 175,
    maxHeight: 175,
    borderRadius: 8,
    padding: '10px 8px',
    position: 'relative',
    color: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    aspectRatio: '0.84',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      minWidth: '100%',
      maxWidth: '100%',
    },
    [`@media (max-width:575px)`]: {
      minWidth: 165,
      maxWidth: 165,
      minHeight: 196,
      maxHeight: 196,
    },
  },
  content: {
    gap: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  title: {
    fontWeight: 400,
    lineHeight: '15px',
    fontSize: 12,
    color: 'var(--grey)',
  },

  category: {
    opacity: 0.7,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '20px',
    textTransform: 'uppercase',
  },
  gift: {
    padding: 0,
    width: '32px !important',
    height: '32px !important',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 6,
    right: 6,
    ':hover': {
      background: 'initial',
    },
  },
}));
