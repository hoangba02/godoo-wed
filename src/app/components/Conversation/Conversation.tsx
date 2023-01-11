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
import { ReactComponent as Calendar } from 'assets/icons/chat/calendar.svg';
import { ReactComponent as Calendarcolor } from 'assets/icons/chat/calendarChatColor.svg';
import { ReactComponent as Gift } from 'assets/icons/chat/giftMess.svg';
import { ReactComponent as GiftColor } from 'assets/icons/chat/giftMessColor.svg';
import DateForm from '../DateForm/DateForm';

interface Props {
  location?: any;
}
function Conversation({ location }: Props) {
  const navigate = useNavigate();
  const { classes } = ConversationStyles();
  const { isShowing, isShowing2, toggle, toggle2 } = useModal();
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
        <Button variant="subtle" className={classes.footerBtn}>
          <Gift />
        </Button>
        <Button
          variant="subtle"
          className={classes.footerBtn}
          onClick={toggle2}
        >
          {isShowing2 ? <Calendarcolor /> : <Calendar />}
        </Button>
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
      <DateForm hide={toggle2} isShowing={isShowing2} translateX="45%" />
    </Container>
  );
}

export default Conversation;
