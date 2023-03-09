import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.auth || initialState;
export const selectAuth = createSelector([selectDomain], auth => auth);
export const selectCurrentProfile = createSelector(
  [selectDomain],
  auth => auth.currentProfile,
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
