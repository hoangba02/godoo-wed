/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slice/authSlice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
import { InjectedReducersType } from 'utils/types/injector-typings';
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducers = combineReducers({
    auth: authReducer,
  });

  return rootReducers;
}
