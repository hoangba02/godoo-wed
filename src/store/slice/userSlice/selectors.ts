import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.user || initialState;

export const getUserSelector = createSelector([selectDomain], user => user);
