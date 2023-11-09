import { reducerPhone } from './contacts/contactsSlice';
import { appReducer } from './appState/appSlice';
import { authReducer } from './auth/authSlice';
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
