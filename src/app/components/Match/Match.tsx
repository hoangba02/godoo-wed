import React, { useEffect, useState } from 'react';
import { Container, Text } from '@mantine/core';
import { MatchStyles } from './MatchStyles';
import Search from './Search';
import NewMatch from './NewMatch';
import MatchList from './MatchList';
import MatchHeader from './MatchHeader';
import { useMediaQuery } from '@mantine/hooks';
import { apiPost } from 'utils/http/request';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

function Match() {
  const user = useSelector(getUserSelector);
  const { classes } = MatchStyles();
  const phone = useMediaQuery('(max-width:575px)');

  // Local
  const [listMatch, setListMatch] = useState([]);

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
        setListMatch(res.data);
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
        {listMatch.length !== 0 ? (
          <>
            <MatchList listMatch={listMatch} />
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
