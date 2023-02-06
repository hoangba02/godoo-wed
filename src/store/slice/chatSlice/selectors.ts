import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.chat || initialState;

export const getChatSelector = createSelector([selectDomain], chat => chat);
