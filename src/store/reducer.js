import { reducerPhone } from './slice';
import { appReducer } from './appState/slice';
import { authReducer } from './auth/slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  contacts: reducerPhone,
  appState: appReducer,
  auth: authPersistedReducer,
};
