import React from 'react';
import { Container } from '@mantine/core';
import { MatchStyles } from './MatchStyles';
import Search from './Search';
import NewMatch from './NewMatch';
import MatchList from './MatchList';
import MatchHeader from './MatchHeader';
import { useMediaQuery } from '@mantine/hooks';

function Match() {
  const { classes } = MatchStyles();
  const phone = useMediaQuery('(max-width:575px)');
  return (
    <Container fluid className={classes.container}>
      <div className={classes.wrapper}>
        {!phone && <MatchHeader />}
        <Search />
        <MatchList />
        <NewMatch />
      </div>
    </Container>
  );
}

export default Match;
