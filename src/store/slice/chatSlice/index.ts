import { PayloadAction } from '@reduxjs/toolkit';
import { persistor } from 'index';
import { useEffect } from 'react';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ChatState } from '../type';
import { chatSaga } from './saga';

export const initialState: ChatState = {
  id: -1,
  conversation_id: -1,
  // Danh sách trò chuyện (match)
  conversations: [],
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    requestMessage(state: ChatState, action: PayloadAction<ChatState>) {},
  },
});

export const { actions: chatActions, reducer } = slice;
export const ChatSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: chatSaga });
  useEffect(() => {
    persistor.persist();
  }, []);
  return { actions: slice.actions };
};
