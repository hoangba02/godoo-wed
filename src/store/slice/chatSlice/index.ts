import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ChatState } from '../type';

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
