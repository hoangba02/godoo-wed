import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Flex, Text } from '@mantine/core';

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
import { getUserSelector } from 'store/slice/userSlice/selectors';
import ConversationContent from './Content';

interface Props {
  location?: any;
}
function Conversation({ location }: Props) {
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  // const ws = new WebSocket(
  //   `ws://ttvnapi.com/v1/?id=${user.id}&token=${user.token}`,
  // );
  // Local
  const ws = useRef<any>(null);
  const messRef = useRef<HTMLDivElement[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { classes } = ConversationStyles();
  const { isShowing, isShowing2, toggle, toggle2 } = useModal();
  const [showTime, setShowTime] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);

  const [message, setMessage] = useState<any>();
  const [messages, setMessages] = useState<any>([]);
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
  const handleNewMessage = e => {
    setMessage(e.target.value);
    console.log(message);
  };
  const handleSendMessage = () => {
    if (message) {
      const content = {
        id: 1001,
        d: {
          t: location.profile.userId,
          cv: location.profile.userId,
          c: { txt: message },
        },
      };
      console.log(content);
      setMessages([...messages, content]);
      setMessage('');
    }
  };
  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  // useEffect(() => {
  //   ws.current = new WebSocket(
  //     `ws://ttvnapi.com/v1/?id=${user.id}&token=${user.token}`,
  //   );
  //   if (messagesEndRef) {
  //     messagesEndRef.current?.scrollIntoView();
  //   }
  // }, [location.profile.userId]);
  // useEffect(() => {
  //   ws.current.onopen = e => {
  //     console.log('Connected', e);
  //   };

  //   ws.current.onclose = e => {
  //     console.log(' Disconnected', e);
  //   };
  //   return () => {
  //     ws.current.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   ws.current.onmessage = e => {
  //     const message = JSON.parse(e.data);
  //     // setMessages([...messages, message]);
  //     console.log(message);
  //   };
  // }, [message]);
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
      <ConversationContent
        profile={location.profile}
        messages={messages}
        messEnd={messagesEndRef}
        ref={messRef}
      />
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
            value={message}
            onChange={e => handleNewMessage(e)}
            onKeyDown={handleEnterKey}
          />
          <button className={classes.emoij}>
            <Smiley />
          </button>
        </Flex>
        <button className={classes.chatBtn} onClick={handleSendMessage}>
          <ArrowRight />
        </button>
      </Flex>
      <DateForm
        hide={toggle2}
        isShowing={isShowing2}
        profile={location.profile}
        translateX="45%"
      />
    </Container>
  );
}

export default Conversation;
