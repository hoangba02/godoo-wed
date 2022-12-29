import React from 'react';
import MatchAccount from 'app/components/MatchAccount/MatchAccount';
import { Link } from 'react-router-dom';

function NewMatch() {
  return (
    <>
      <Link to="/:20">
        <MatchAccount />
      </Link>
      <MatchAccount />
      <MatchAccount />
      <MatchAccount />
      <MatchAccount />
      <MatchAccount />
      <MatchAccount />
    </>
  );
}

export default NewMatch;
