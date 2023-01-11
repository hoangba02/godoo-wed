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

interface Props {
  location?: any;
}
function Conversation({ location }: Props) {
  console.log(location);

  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();
  const { classes } = ConversationStyles();
  return (
    <Container fluid className={classes.container}>
      <Profile
        hide={toggle}
        isShowing={isShowing}
        profile={location.profile}
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
          {location.profile.nickname}
        </Text>
        <Box>
          <Detail />
        </Box>
      </Flex>
      <Card className={classes.body}>
        <Stack className={classes.avatar}>
          <Text className={classes.text}>
            {`${location.profile.nickname} is your new match!`}
          </Text>
          <Avatar radius={9999} size={176} src={location.profile.picture[0]} />
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
