import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { chatSaga } from './saga';
import { persistor } from 'index';
import { useEffect } from 'react';
import { ChatState } from '../type';

export const initialState: ChatState = {
  sendingMessage: false,
  sendingConversation: false,
  createdConversation: false,
  response: {
    error: -1,
    message: '',
  },
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // set simple property
    setSendingMessage(state: ChatState, action: PayloadAction<boolean>) {
      state.sendingMessage = action.payload;
    },
    setSendingConversation(state: ChatState, action: PayloadAction<boolean>) {
      state.sendingConversation = action.payload;
    },
    setErrorChat(
      state: ChatState,
      action: PayloadAction<{ error: number; message: String }>,
    ) {
      state.response.error = action.payload.error;
      state.response.message = action.payload.message;
    },
    setCreatedConversation(state: ChatState, action: PayloadAction<boolean>) {
      state.createdConversation = action.payload;
    },

    resetChat(state: ChatState, action: PayloadAction<boolean>) {
      state.sendingConversation = false;
      state.sendingMessage = false;
      state.response.error = -1;
      state.response.message = '';
    },
  },
});

export const { actions: chatActions, reducer } = slice;

export const useChatSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: chatSaga });
  useEffect(() => {
    persistor.persist();
  }, []);

  return { actions: slice.actions };
};
