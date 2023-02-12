import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Conversation from 'app/components/Conversation/Conversation';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';
import { useParams } from 'react-router-dom';
import Websocket from 'lib/socket/websocket';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiGet } from 'utils/http/request';
import { LoadingOverlay } from '@mantine/core';

export function ChatPage() {
  const { userId } = useParams();
  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:576px)');

  // Local
  const [profile, setProfile] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  // useEffect(() => {
  //   setLoading(true);

  //   apiGet('/v1/godoo/profile/get', {
  //     userId: userId,
  //   })
  //     .then(res => {
  //       setProfile(res.data);
  //       setLoading(false);
  //       Websocket.onSend({
  //         id: 1011,
  //         d: {
  //           t: res.data.userId,
  //           n: `${user.id}-${res.data.userId}`,
  //         },
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userId]);
  // useEffect(() => {
  //   Websocket.onMessage(1011, response => {
  //     console.log(response);
  //   });
  // }, []);
  // console.log(loading);

  if (phone) {
    return (
      <Conversation
        profile={profile}
        messages={messages}
        setMessages={setMessages}
      />
    );
  }
  return (
    <HomeWebLayout>
      <LoadingOverlay
        visible={loading}
        overlayBlur={2}
        loaderProps={{ color: '#E46125' }}
      />
      <Conversation
        profile={profile}
        messages={messages}
        setMessages={setMessages}
      />
    </HomeWebLayout>
  );
}
