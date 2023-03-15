import { createApi } from '@reduxjs/toolkit/query/react';
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

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: authInstance,
  tagTypes: ['Auth'],
  endpoints: build => ({
    // fetchContacts: build.query({
    //   query: () => `/contacts`,
    //   providesTags: ['Contacts'],
    // }),
    signUp: build.mutation({
      query: data => ({
        url: `/users/signup`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['Auth'],
    }),
    login: build.mutation({
      query: data => ({
        url: `/users/login`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    // addContact: build.mutation({
    //   query: contact => ({
    //     url: `/contacts`,
    //     method: 'POST',
    //     data: contact,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
    // deleteContact: build.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
  authApi;
