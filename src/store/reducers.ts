/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserState } from './slice/type';

const formTransform = createTransform(
  (inboundState: any, key) => {
    return {
      ...inboundState,
      password: inboundState.response.login.remember_password
        ? inboundState.password
        : '',
      preferences: [],
    };
  },
  (outboundState: any, key): {} => {
    return {
      ...(outboundState as UserState),
      response: {
        loading: false,
        login: {
          error: -1,
          message: '',
          savePassword: outboundState.login.savePassword,
        },
        register: {
          error: -1,
          message: '',
        },
      },
    };
  },
  { whitelist: ['user'] },
);

const persistConfig = {
  key: 'state',
  version: 1,
  storage,
  blacklist: [],
};

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    const rootReducer = combineReducers({
      ...injectedReducers,
    });
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    return persistedReducer;
  }
}

// export function createReducer(injectedReducers: InjectedReducersType = {}) {
//   // Initially we don't have any injectedReducers, so returning identity function to avoid the error
//   if (Object.keys(injectedReducers).length === 0) {
//     return state => state;
//   } else {
//     return combineReducers({
//       ...injectedReducers,
//     });
//   }
// }
