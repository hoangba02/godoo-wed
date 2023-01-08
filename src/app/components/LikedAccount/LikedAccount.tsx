import React from 'react';
import { Box, createStyles, Overlay, Paper, Text } from '@mantine/core';
import { ReactComponent as GiftBox } from 'assets/icons/gift.svg';
import Profile from '../Profile/Profile';
import useModal from 'hooks/useModal';

interface Props {
  data: any;
  isLiked: string;
}
function LikedAccount({ data, isLiked }: Props) {
  const { classes } = useStyles();
  const { isShowing, toggle } = useModal();
  return (
    <>
      <Profile
        isShowing={isShowing}
        hide={toggle}
        status={isLiked}
        profile={data}
      />
      <Paper
        shadow="md"
        radius={0}
        sx={{
          backgroundImage: `url('https://i.pinimg.com/236x/83/73/1d/83731d9481ca21511b9bb1ddd385795f.jpg')`,
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
        <Box className={classes.content}>
          <Text className={classes.category} size="xs">
            {data.nickname}
          </Text>
          <Text lineClamp={2} className={classes.title}>
            {data.introduction}
          </Text>
        </Box>
        <Box className={classes.gift}>
          <GiftBox />
        </Box>
      </Paper>
    </>
  );
}

export default LikedAccount;

const useStyles = createStyles(() => ({
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
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'transparent',
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
    position: 'absolute',
    top: 6,
    right: 6,
  },
}));
