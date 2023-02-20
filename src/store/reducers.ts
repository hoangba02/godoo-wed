import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';

import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserState } from './slice/type';

// const formTransform = createTransform(
//   (inboundState, key) => {
//     return inboundState;
//   },
//   (outboundState: any, key): {} => {
//     return {
//       ...(outboundState as UserState),
//       response: {
//         error: -1,
//         message: '',
//         savePassword: outboundState.response.remember_password,
//       },
//     };
//   },
//   { whitelist: ['user'] },
// );
const persistConfig = {
  key: 'state',
  version: 1,
  storage,
  // transforms: [formTransform],
  blacklist: [],
  // migrate: state => {
  //   return Promise.resolve(state);
  // },
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
