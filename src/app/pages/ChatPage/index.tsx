import { useMediaQuery } from '@mantine/hooks';
import Conversation from 'app/components/Conversation/Conversation';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';
import React from 'react';

export function ChatPage() {
  const phone = useMediaQuery('(max-width:576px)');
  if (phone) {
    return <Conversation />;
  }
  return (
    <HomeWebLayout>
      <Conversation />
    </HomeWebLayout>
  );
}
