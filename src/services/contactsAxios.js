import { createApi } from '@reduxjs/toolkit/query/react';

import { authInstance } from './authAPI';

export const fetchContactsFromDB = () => authInstance.get('/contacts');

export const postContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContactFromDB = id => authInstance.delete(`/contacts/${id}`);

export const editContact = ({ id, name, number }) => {
  return authInstance.patch(`/contacts/${id}`, {
    name,
    number,
  });
};

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: authInstance,
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    editContact: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        data: patch,
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        data: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useEditContactMutation,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
