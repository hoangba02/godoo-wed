import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, createStyles, Flex } from '@mantine/core';
import { ReactComponent as Swipe } from 'assets/icons/swipeIcon.svg';
import { ReactComponent as SwipeFriend } from 'assets/icons/swipeFriend.svg';
import { ReactComponent as SwipeLove } from 'assets/icons/swipeLove.svg';
import { ReactComponent as Liked } from 'assets/icons/likedIcon.svg';
import { ReactComponent as LikedFriend } from 'assets/icons/likedFriend.svg';
import { ReactComponent as LikedLove } from 'assets/icons/likedLove.svg';
import { ReactComponent as Chat } from 'assets/icons/chatIcon.svg';
import { ReactComponent as ChatFriend } from 'assets/icons/chatFriend.svg';
import { ReactComponent as ChatLove } from 'assets/icons/chatLove.svg';
import { ReactComponent as User } from 'assets/icons/userIcon.svg';
import { ReactComponent as UserFriend } from 'assets/icons/userFriend.svg';
import { ReactComponent as UserLove } from 'assets/icons/userLove.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';

const DATA = [
  {
    basic: <Swipe />,
    friend: <SwipeFriend />,
    love: <SwipeLove />,
  },
  {
    basic: <Liked />,
    friend: <LikedFriend />,
    love: <LikedLove />,
  },
  {
    basic: <Chat />,
    friend: <ChatFriend />,
    love: <ChatLove />,
  },
  {
    basic: <User />,
    friend: <UserFriend />,
    love: <UserLove />,
  },
];
interface Props {
  active?: number;
  setActive?: any;
}
function Header({ active, setActive }: Props) {
  const { classes } = useStyles();
  const profile = useSelector(getProfileSelector);
  return (
    <Container fluid className={classes.container}>
      <Flex className={classes.wrapper}>
        {DATA.map((value, index) => {
          let mode = profile.relationship === 0 ? value.friend : value.love;
          return (
            <Button
              key={index}
              className={classes.navBtn}
              onClick={index => {
                setActive(index);
              }}
            >
              {active !== index ? value.basic : mode}
            </Button>
          );
        })}
      </Flex>
    </Container>
  );
}

export default Header;

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 75,
    margin: 0,
    background: '#FFE9E0',
    borderRadius: '20px 20px 0px 0px',
  },
  wrapper: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBtn: {
    width: 45,
    height: 45,
    padding: 10,
    background: 'transparent',
    '::before': {
      display: 'none',
    },
    ':hover': {
      background: 'transparent',
    },
  },
}));
