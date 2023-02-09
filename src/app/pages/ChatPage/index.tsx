import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Conversation from 'app/components/Conversation/Conversation';
import HomeWebLayout from 'app/components/Layout/HomeWeb/HomeWebLayout';

import { useLocation } from 'react-router-dom';

export function ChatPage() {
  const location = useLocation();
  const phone = useMediaQuery('(max-width:576px)');

  if (phone) {
    return <Conversation location={location.state} />;
  }
  return (
    <HomeWebLayout>
      <Conversation location={location.state} />
    </HomeWebLayout>
  );
}
