import { createAsyncThunk } from '@reduxjs/toolkit';
import { refresh, signIn, signOut, signUp } from '../../api/auth';

export const registrationThunk = createAsyncThunk(
  'users/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    try {
      const data = await refresh();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signOut(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
