import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';

import Profile from '../Profile/Profile';
import { ConversationStyles } from './ConversationStyles';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Detail } from 'assets/icons/detail.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrowRight.svg';
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as Gift } from 'assets/icons/giftMess.svg';

function Conversation() {
  const profiles = {
    userId: 5,
    nickname: 'natur5',
    picture: [
      'https://i.pinimg.com/236x/c9/5b/7c/c95b7c87811061e3e82b0b02ebd5c24d.jpg',
      'https://i.pinimg.com/236x/d8/29/d7/d829d71b48f5efbe37e4761e15a5aaf0.jpg',
      'https://i.pinimg.com/236x/09/d3/51/09d3513c96669399a6ccc3ddc1d0a012.jpg',
    ],
    gender: ['Male', 'Asexual'],
  };
  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();
  const { classes } = ConversationStyles();
  return (
    <Container fluid className={classes.container}>
      <Profile
        hide={toggle}
        isShowing={isShowing}
        profile={profiles}
        translateX="45%"
      />
      <Flex className={classes.header}>
        <Box
          onClick={() => {
            navigate('/');
          }}
        >
          <ArrowLeft />
        </Box>
        <Text className={classes.nickname} onClick={toggle}>
          Anna
        </Text>
        <Box>
          <Detail />
        </Box>
      </Flex>
      <Card className={classes.body}>
        <Stack className={classes.avatar}>
          <Text className={classes.text}>Anna is your new match!</Text>
          <Avatar
            radius={9999}
            size={176}
            src="https://i.pinimg.com/564x/06/9f/d5/069fd503b10068c30c1d11886a9aa2f5.jpg"
          />
        </Stack>
        <Card className={classes.message}>
          <></>
        </Card>
      </Card>
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
