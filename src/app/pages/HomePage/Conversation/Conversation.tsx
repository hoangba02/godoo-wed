import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { ConversationStyles } from './ConversationStyles';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Detail } from 'assets/icons/detail.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrowRight.svg';
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as Gift } from 'assets/icons/giftMess.svg';
import { useNavigate } from 'react-router-dom';

function Conversation() {
  const navigate = useNavigate();
  const { classes } = ConversationStyles();
  return (
    <Container fluid className={classes.container}>
      <Flex className={classes.header}>
        <Box
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowLeft />
        </Box>
        <Text className={classes.nickname}>Anna</Text>
        <Box>
          <Detail />
        </Box>
      </Flex>
      <Box className={classes.body}>
        <Box>
          <Stack className={classes.avatar}>
            <Text className={classes.text}>Anna is your new match!</Text>
            <Avatar
              radius={9999}
              size={176}
              src="https://i.pinimg.com/564x/06/9f/d5/069fd503b10068c30c1d11886a9aa2f5.jpg"
            />
          </Stack>
        </Box>
      </Box>
      <Flex className={classes.footer}>
        <Box>
          <Gift />
        </Box>
        <Box>
          <Calendar />
        </Box>
        <Flex className={classes.chatBox}>
          <input
            type="text"
            className={classes.input}
            placeholder="Write message"
          />
          <button className={classes.sendBtn}>
            <ArrowRight />
          </button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Conversation;
