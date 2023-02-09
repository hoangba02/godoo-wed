import React from 'react';

export const connectWebSocket = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  console.log(user);
  const ws = new WebSocket(
    `ws://ttvnapi.com/v1?id=${user.id}&token=${user.token}`,
  );
  return ws;
};
