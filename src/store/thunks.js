import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, removeContact, addItem } from 'api/contacts';

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
