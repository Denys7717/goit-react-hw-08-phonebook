import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshThunk,
  registrationThunk,
  logoutThunk,
} from './authThunks';

const initialState = {
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const handleLogoutFulfilled = state => {
  state.token = '';
  state.profile = null;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.profile = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
