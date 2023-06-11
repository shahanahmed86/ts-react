import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { themeReducer } from './theme';

import { DEV } from '../utils/config';

const KEY = '@root';

const persistConfig = {
  key: KEY,
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: DEV,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
