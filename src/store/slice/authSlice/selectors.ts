import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.auth || initialState;
export const selectAuth = createSelector([selectDomain], auth => auth);
export const selectProfile = createSelector(
  [selectDomain],
  auth => auth.profile,
);
export const selectIsLoading = createSelector(
  [selectDomain],
  auth => auth.isLoading,
);
export const selectIsMobile = createSelector(
  [selectDomain],
  auth => auth.isMobile,
);
export const selectRegister = createSelector(
  [selectDomain],
  auth => auth.register,
);
export const selectLogin = createSelector([selectDomain], auth => auth.login);
