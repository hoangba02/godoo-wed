import React from 'react';
import { Avatar, Card, Stack, Text } from '@mantine/core';

import { ConversationStyles } from './ConversationStyles';
import TextMessage from '../Message/TextMess';
function Content({ profile, messages, messEnd }, ref) {
  const { classes } = ConversationStyles();
  return (
    <Card className={classes.body}>
      <Stack className={classes.message}>
        <Stack className={classes.avatar}>
          <Text className={classes.text}>
            {`${profile?.nickname} is your new match!`}
          </Text>
          <Avatar radius={9999} size={176} src={profile?.picture[0]} />
        </Stack>
        {messages.map((chat, index) => (
          <TextMessage
            key={index}
            content={chat.d.c.txt}
            auth={chat.d.u ? false : true}
            ref={(el: never) => (ref.current[index] = el)}
            // showTime={showTime}
            position={index}
            // handleShowTime={handleShowTime}
          />
        ))}
      </Stack>
      <div style={{ float: 'left', clear: 'both' }} ref={messEnd}></div>
    </Card>
  );
}
const ConversationContent = React.forwardRef(Content);
export default ConversationContent;
