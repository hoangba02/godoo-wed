import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Conversation from 'app/components/Conversation/Conversation';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiGet } from 'utils/http/request';
import { LoadingOverlay } from '@mantine/core';
import Websocket from 'contexts/websocket';
import { UserSlice } from 'store/slice/userSlice';

export function ChatPage() {
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const { userId } = useParams();
  const { actions } = UserSlice();
  // Local
  const [profile, setProfile] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<any>([]);
  const phone = useMediaQuery('(max-width:576px)');
  useEffect(() => {
    dispatch(actions.setMatchStatus());
    apiGet('/v1/godoo/profile/get', {
      userId: userId,
    })
      .then(res => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
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
