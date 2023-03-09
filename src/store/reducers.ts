import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slice/authSlice';

import { InjectedReducersType } from 'utils/types/injector-typings';
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// export default rootReducer;

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    const rootReducer = combineReducers({
      ...injectedReducers,
    });
    return rootReducer;
  }
}
