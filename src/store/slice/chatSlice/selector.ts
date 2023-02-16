import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types';
import { initialState } from './index';

const selectDomain = (state: RootState) => state.chat || initialState;
export const selectChat = createSelector([selectDomain], chat => chat);

export const selectSendingMessage = createSelector(
  [selectDomain],
  chat => chat.sendingMessage,
);
export const selectSendingConversation = createSelector(
  [selectDomain],
  chat => chat.sendingConversation,
);
export const selectErrorChat = createSelector(
  [selectDomain],
  chat => chat.response.error,
);
