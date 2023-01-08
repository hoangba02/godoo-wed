import React from 'react';
import MatchAccount from 'app/components/MatchAccount/MatchAccount';
import { Link } from 'react-router-dom';
import { Container, createStyles, Text } from '@mantine/core';

function NewMatch() {
  const { classes } = useStyles();
  return (
    <Container
      fluid
      sx={{
        maxWidth: 308,
        [`@media (max-width:575px)`]: {
          maxWidth: '100%',
        },
      }}
      className={classes.container}
    >
      <Text className={classes.text}>Conversations</Text>
      <div>
        <Link to="chat/:20">
          <MatchAccount />
        </Link>
        <MatchAccount />
        <MatchAccount />
        <MatchAccount />
        <MatchAccount />
        <MatchAccount />
        <MatchAccount />
      </div>
    </Container>
  );
}

export default NewMatch;

const useStyles = createStyles(() => ({
  container: {
    padding: 0,
    margin: '24px 0 0',
  },
  text: {
    color: '#E46125',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    marginBottom: 5,
  },
}));
