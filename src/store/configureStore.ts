import createSagaMiddleware from 'redux-saga';
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
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
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createReducer } from './reducers';
import { createInjectorsEnhancer } from 'redux-injectors';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['auth'],
  migrate: state => {
    return Promise.resolve(state);
  },
};

const persistedReducer = persistReducer(persistConfig, createReducer());

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
  ] as StoreEnhancer[];

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
    enhancers,
  });
  const persistor = persistStore(store);
  // sagaMiddleware.run(rootSaga);
  return { store, persistor };
}

// const sagaMiddleware = createSagaMiddleware();
// const { run: runSaga } = sagaMiddleware;
// const middlewares = [sagaMiddleware];

// const enhancers = [
//   createInjectorsEnhancer({
//     createReducer,
//     runSaga,
//   }),
// ] as StoreEnhancer[];
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: defaultMiddleware => [
//     ...defaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     ...middlewares,
//   ],
//   devTools:
//     process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
//   enhancers,
// });

// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);

export const { store, persistor } = configureAppStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
