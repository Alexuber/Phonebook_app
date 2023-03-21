import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const authInstance = axios.create({
  baseURL: BASE_URL,
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.Authorization = '';
};

export const userSignUp = async data => {
  const { data: result } = await authInstance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const userLogin = async data => {
  const { data: result } = await authInstance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const response = await authInstance.post('/users/logout');
  setToken();
  return response;
};

export const current = async token => {
  setToken(token);
  const response = await authInstance.get('/users/current');
  return response;
};
