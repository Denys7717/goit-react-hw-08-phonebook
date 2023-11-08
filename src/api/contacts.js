import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const updateContact = async ({ id, name, number }) => {
  const { data } = await axios.patch(`contacts/${id}`, { name, number });
  return data;
};

export const addItem = async item => {
  const { data } = await axios.post('contacts', item);
  return data;
};
