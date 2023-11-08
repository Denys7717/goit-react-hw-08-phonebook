import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  removeContact,
  addItem,
  updateContact,
} from 'api/contacts';

export const getAllContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => await removeContact(id)
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async item => await addItem(item)
);

export const updateContactThunk = createAsyncThunk(
  'users/updateContact',
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const data = await updateContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
