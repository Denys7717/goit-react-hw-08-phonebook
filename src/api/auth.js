import axios from 'axios';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await axios.post('users/signup', body);
  setToken(data.token);
  return data;
};

export const refresh = async token => {
  setToken(token);
  const { data } = await axios('users/current');
  return data;
};

export const signIn = async body => {
  const { data } = await axios.post('users/login', body);
  setToken(data.token);
  return data;
};

export const signOut = async token => {
  const { data } = await axios.post('users/logout', token);
  deleteToken();
  return data;
};

export default setToken;
