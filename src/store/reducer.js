import { reducerPhone } from './slice';
import { appReducer } from './appState/slice';

export const reducer = {
  contacts: reducerPhone,
  appState: appReducer,
};
