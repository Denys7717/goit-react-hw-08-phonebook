import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshThunk,
  registrationThunk,
  logoutThunk,
} from './thunks';

const initialState = {
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const handleLogoutFulfilled = state => {
  state.profile = null;
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleAuthFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
