import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.auth || initialState;
export const selectAuth = createSelector([selectDomain], auth => auth);
export const selectIsLoading = createSelector(
  [selectDomain],
  auth => auth.isLoading,
);
