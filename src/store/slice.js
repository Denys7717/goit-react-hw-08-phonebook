import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, getAllContacts, deleteContact } from './thunks';
import {
  handleFulfilledAll,
  handleFulfilledAdd,
  handleFulfilledDelete,
} from './helpers';

export const phoneSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, handleFulfilledAll)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete);
  },
});

export const reducerPhone = phoneSlice.reducer;
export const { filterContact } = phoneSlice.actions;
