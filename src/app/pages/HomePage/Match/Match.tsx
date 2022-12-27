import React from 'react';
import { Avatar, Container, Flex, Stack, Text } from '@mantine/core';
import { MatchStyles } from './MatchStyles';
import Search from './Search';
import NewMatch from './NewMatch';

function Match() {
  const { classes } = MatchStyles();
  return (
    <Container fluid className={classes.container}>
      <Flex>
        <Avatar
          size={50}
          radius="xl"
          src="https://i.pinimg.com/236x/47/10/93/471093fa6583930714506215fd25a78d.jpg"
          alt="it's me"
        />
        <Stack className={classes.user}>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
            }}
          >
            John sayhi!
          </Text>
        </Stack>
      </Flex>
      <Search />
      <NewMatch />
    </Container>
  );
}

export default Match;
