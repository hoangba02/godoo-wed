import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
import Profile from '../Profile/Profile';
import { ConversationStyles } from './ConversationStyles';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Detail } from 'assets/icons/detail.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrowRight.svg';
import { ReactComponent as Smiley } from 'assets/icons/chat/smiley.svg';
import { ReactComponent as Plus } from 'assets/icons/chat/plus.svg';
import { ReactComponent as Calendar } from 'assets/icons/chat/calendar.svg';
import { ReactComponent as Calendarcolor } from 'assets/icons/chat/calendarChatColor.svg';
import { ReactComponent as Gift } from 'assets/icons/chat/giftMess.svg';
import { DateForm } from '../DateForm/DateForm';
import TextMessage from '../Message/TextMess';

const ChatHistory = [
  {
    type: 'text',
    auth: false,
    content: 'Hello',
  },
  {
    type: 'text',
    auth: true,
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias, debitis ipsum officia a deserunt, in repellendus aliquam iure qui laboriosam rem, modi excepturi saepe similique eos vero facilis.',
  },
  {
    type: 'text',
    auth: false,
    content: 'Hello',
  },
  {
    type: 'text',
    auth: true,
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias, debitis ipsum officia a deserunt, in repellendus aliquam iure qui laboriosam rem, modi excepturi saepe similique eos vero facilis.',
  },
  {
    type: 'text',
    auth: false,
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias, debitis ipsum officia a deserunt, in repellendus aliquam iure qui laboriosam rem, modi excepturi saepe similique eos vero facilis.',
  },
  {
    type: 'text',
    auth: true,
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias, debitis ipsum officia a deserunt, in repellendus aliquam iure qui laboriosam rem, modi excepturi saepe similique eos vero facilis.',
  },
];
interface Props {
  location?: any;
}
function Conversation({ location }: Props) {
  const navigate = useNavigate();
  const messRef = useRef<HTMLDivElement[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { classes } = ConversationStyles();
  const { isShowing, isShowing2, toggle, toggle2 } = useModal();
  const [showTime, setShowTime] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const handleShowTime = (event, position) => {
    const { target } = event;
    if (messRef.current !== null) {
      if (!messRef.current[position].contains(target)) {
        setShowTime(-1);
      } else {
        if (showTime === position) {
          setShowTime(-1);
        } else {
          setShowTime(position);
        }
      }
    }
  };
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };
  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.current?.scrollIntoView();
    }
  }, [location.profile.userId]);
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
        <Stack className={classes.message}>
          <Stack className={classes.avatar}>
            <Text className={classes.text}>
              {`${location.profile.nickname} is your new match!`}
            </Text>
            <Avatar
              radius={9999}
              size={176}
              src={location.profile.picture[0]}
            />
          </Stack>
          {ChatHistory.map((chat, index) => (
            <TextMessage
              key={index}
              content={chat.content}
              auth={chat.auth}
              ref={(el: never) => (messRef.current[index] = el)}
              showTime={showTime}
              position={index}
              handleShowTime={handleShowTime}
            />
          ))}
        </Stack>
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={messagesEndRef}
        ></div>
      </Card>
      <Flex className={classes.footer}>
        <motion.div
          className={classes.options}
          animate={showOptions ? 'visible' : 'hidden'}
          transition={{
            duration: 1,
          }}
          variants={variants}
        >
          <Flex>
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
          </Flex>
        </motion.div>
        <motion.button
          animate={{
            transform: showOptions ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          transition={{
            duration: 1,
          }}
          className={classes.chatBtn}
          onClick={() => handleShowOptions()}
        >
          <Plus />
        </motion.button>
        <Flex className={classes.chatBox}>
          <input
            type="text"
            className={classes.input}
            placeholder="Write message"
          />
          <button className={classes.emoij}>
            <Smiley />
          </button>
        </Flex>
        <button className={classes.chatBtn}>
          <ArrowRight />
        </button>
      </Flex>
      <DateForm hide={toggle2} isShowing={isShowing2} translateX="45%" />
    </Container>
  );
}

export default Conversation;
