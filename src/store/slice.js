import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContact,
  getAllContacts,
  deleteContact,
  updateContactThunk,
} from './thunks';
import {
  handleFulfilledAll,
  handleFulfilledAdd,
  handleFulfilledDelete,
  updateFulfilledAll,
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
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(updateContactThunk.fulfilled, updateFulfilledAll);
  },
});

export const reducerPhone = phoneSlice.reducer;
export const { filterContact } = phoneSlice.actions;
