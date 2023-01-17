import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { MatchStyles } from './MatchStyles';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Image, Text } from '@mantine/core';

import Search from './Search';
import NewMatch from './NewMatch';
import MatchList from './MatchList';
import { images } from 'assets/images';
import MatchHeader from './MatchHeader';
import { apiPost } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import NoYetGift from 'assets/lotties/NoYet.json';

function Match() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoYetGift,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    eventListeners: [
      {
        eventName: 'complete',
        callback: () => console.log('the animation completed:'),
      },
    ],
  };
  // Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = MatchStyles();
  const phone = useMediaQuery('(max-width:575px)');
  const [pause, setPause] = useState(false);

  useEffect(() => {
    apiPost(
      '/v1/godoo/match/getyoumatched',
      {
        quantity: 10,
      },
      {
        userid: user.id,
        token: user.token,
      },
    )
      .then(res => {
        // console.log(res.data);
        dispatch(actions.getMatchList(res.data));
      })
      .catch(err => {
        console.log(err);
      });

    const timer = setTimeout(() => {
      setPause(true);
    }, 6900);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container fluid className={classes.container}>
      <div className={classes.wrapper}>
        {!phone && <MatchHeader />}
        <Search />
        {user.matchList.length !== 0 ? (
          <>
            <MatchList matchList={user.matchList} />
            <NewMatch />
          </>
        ) : (
          <Card className={classes.hollow}>
            <Lottie options={defaultOptions} isPaused={phone ? true : pause} />
            <Text
              sx={{
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '20px',
                textAlign: 'center',
                color: '#929292',
                marginTop: 25,
                [`@media (max-width:575px)`]: {
                  marginTop: 0,
                },
              }}
            >
              No one to chat yet?
            </Text>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default Match;
