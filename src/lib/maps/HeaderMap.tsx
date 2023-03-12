import React from 'react';
import { ReactComponent as HomeBasic } from 'assets/icons/homePage/homeBasic.svg';
import { ReactComponent as HomeFriend } from 'assets/icons/homePage/homeFriend.svg';
import { ReactComponent as MatchBasic } from 'assets/icons/homePage/matchBasic.svg';
import { ReactComponent as MatchFriend } from 'assets/icons/homePage/matchFriend.svg';
import { ReactComponent as ChatBasic } from 'assets/icons/homePage/chatBasic.svg';
import { ReactComponent as ChatFriend } from 'assets/icons/homePage/chatFriend.svg';
import { ReactComponent as AboutBasic } from 'assets/icons/homePage/aboutBasic.svg';
import { ReactComponent as AboutFriend } from 'assets/icons/homePage/aboutFriend.svg';

export const HEADERS = [
  {
    basic: <HomeBasic />,
    friend: <HomeFriend />,
    navgigate: '/',
  },
  {
    basic: <ChatBasic />,
    friend: <ChatFriend />,
    navgigate: '/chat',
  },
  {
    basic: <MatchBasic />,
    friend: <MatchFriend />,
    navgigate: '/match',
  },
  {
    basic: <AboutBasic />,
    friend: <AboutFriend />,
    navgigate: '/about',
  },
];
