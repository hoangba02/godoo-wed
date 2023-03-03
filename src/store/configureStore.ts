/**
 * Create the store with dynamic reducers
 */

import {
  combineReducers,
  configureStore,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { history } from 'utils/history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createReducer } from './reducers';
import { authReducer } from './slice/authSlice';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
    connectRouter(history),
  ] as StoreEnhancer[];
  const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
  const store = configureStore({
    reducer: createReducer(),
    middleware: defaultMiddleware => [
      ...defaultMiddleware(),
      routerMiddleware(history),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
}
