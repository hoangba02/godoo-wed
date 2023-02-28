import React from 'react';
import { Button, Container, createStyles, Flex } from '@mantine/core';
import { ReactComponent as SwipeIcon } from 'assets/icons/swipeIcon.svg';
import { ReactComponent as SwipeFriend } from 'assets/icons/swipeFriend.svg';
import { ReactComponent as SwipeLove } from 'assets/icons/swipeLove.svg';
import { ReactComponent as LikedIcon } from 'assets/icons/likedIcon.svg';
import { ReactComponent as LikedFriend } from 'assets/icons/likedFriend.svg';
import { ReactComponent as LikedLove } from 'assets/icons/likedLove.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/chatIcon.svg';
import { ReactComponent as ChatFriend } from 'assets/icons/chatFriend.svg';
import { ReactComponent as ChatLove } from 'assets/icons/chatLove.svg';
import { ReactComponent as UserIcon } from 'assets/icons/userIcon.svg';
import { ReactComponent as UserFriend } from 'assets/icons/userFriend.svg';
import { ReactComponent as UserLove } from 'assets/icons/userLove.svg';
import { useNavigate } from 'react-router-dom';
const DATA = [
  {
    basic: <SwipeIcon />,
    friend: <SwipeFriend />,
    love: <SwipeLove />,
  },
  {
    basic: <LikedIcon />,
    friend: <LikedFriend />,
    love: <LikedLove />,
    route: 'liked',
  },
  {
    basic: <ChatIcon />,
    friend: <ChatFriend />,
    love: <ChatLove />,
    route: 'chat',
  },
  {
    basic: <UserIcon />,
    friend: <UserFriend />,
    love: <UserLove />,
    route: 'about',
  },
];
function HeaderMobile({ active }) {
  const navigate = useNavigate();
  const { classes } = makeStyles();
  return (
    <Container fluid className={classes.header}>
      <Flex className={classes.wrapper}>
        {DATA.map((value, index) => {
          return (
            <Button
              key={index}
              className={classes.navBtn}
              onClick={() => {
                navigate(`/${value.route}`);
              }}
            >
              {active !== value.route ? value.basic : value.friend}
            </Button>
          );
        })}
      </Flex>
    </Container>
  );
}

export default HeaderMobile;
const makeStyles = createStyles(() => ({
  container: {
    minWidth: '100%',
    maxHeight: '100vh',
    overflow: 'hidden',
    padding: 0,
  },
  header: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 65,
    margin: 0,
    background: '#FFE9E0',
    borderRadius: '20px 20px 0px 0px',
    zIndex: 999,
  },
  wrapper: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBtn: {
    width: '45px !important',
    height: '45px !important',
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
