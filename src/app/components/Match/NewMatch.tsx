import React, { useEffect, useState } from 'react';
import { Container, createStyles, Image, Text } from '@mantine/core';

import { images } from 'assets/images';
import Websocket from 'contexts/websocket';
import ConversationList from '../Conversation/ConversationList';

function NewMatch() {
  const { classes } = useStyles();
  const [conversations, setConversations] = useState<any[]>([]);

  // useEffect(() => {
  //   Websocket.getAllConversation().then(data => {
  //     console.log(data);
  //   });
  // }, []);
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
      <Text className={classes.text}>{`Conversations (0)`}</Text>
      {conversations.length !== 0 ? (
        <ConversationList />
      ) : (
        <>
          <Image width={150} height={200} src={images.noConver} />
          <Text
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '20px',
              textAlign: 'center',
              color: '#929292',
            }}
          >
            Let’s start a conversation now!
          </Text>
        </>
      )}
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
