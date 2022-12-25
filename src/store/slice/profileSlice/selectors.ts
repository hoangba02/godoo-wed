import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.profile || initialState;

export const getProfileSelector = createSelector(
  [selectDomain],
  profile => profile,
);
