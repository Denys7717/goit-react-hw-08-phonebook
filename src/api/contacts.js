import axios from 'axios';

axios.defaults.baseURL =
  'https://6543652601b5e279de2047db.mockapi.io/contacts/';

export const fetchContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const addItem = async item => {
  const { data } = await axios.post('contacts', item);
  return data;
};
