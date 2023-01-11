import React, { useEffect, useState } from 'react';
import { Container, Text } from '@mantine/core';
import { MatchStyles } from './MatchStyles';
import Search from './Search';
import NewMatch from './NewMatch';
import MatchList from './MatchList';
import MatchHeader from './MatchHeader';
import { useMediaQuery } from '@mantine/hooks';
import { apiPost } from 'utils/http/request';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';

function Match() {
  // Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);

  // Local
  const { classes } = MatchStyles();
  const phone = useMediaQuery('(max-width:575px)');

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
          <Text
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '20px',
              textAlign: 'center',
              color: '#929292',
              marginTop: 45,
            }}
          >
            No one to chat yet?
          </Text>
        )}
      </div>
    </Container>
  );
}

export default Match;
