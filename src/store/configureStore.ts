import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createReducer } from './reducers';
import { AuthState } from './type';
export function configureAppStore() {
  const passwordTransform = createTransform(
    (inboundState: AuthState, key) => {
      return {
        ...inboundState,
        currentUser: { ...inboundState.currentUser, password: undefined },
      };
    },
    (outboundState, key) => {
      return {
        ...outboundState,
        currentUser: { ...outboundState.currentUser, password: '***' },
      };
    },
    { whitelist: ['auth'] },
  );
  const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    // whitelist: ['auth'],
    transforms: [passwordTransform],
    migrate: state => {
      return Promise.resolve(state);
    },
  };

  const persistedReducer = persistReducer(persistConfig, createReducer());
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: persistedReducer,
    middleware: defaultMiddleware => [
      ...defaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ],
    devTools:
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });

  sagaMiddleware.run(rootSaga);
  return store;
}
export const store = configureAppStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
