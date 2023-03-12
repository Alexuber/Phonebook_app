import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from 'services/contactsAxios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.fetchContactsFromDB();
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

const isDublicate = (contacts, data) => {
  const { name, number } = data;

  const normalizedName = name.toLowerCase();

  const dublicateName = contacts.find(
    ({ name }) => name.toLowerCase() === normalizedName
  );
  const dublicateNumber = contacts.find(
    ({ number: phone }) => number === phone
  );

  if (dublicateName || dublicateNumber) {
    return true;
  }
  return false;
};

export const addContactOnServer = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, getState }) => {
    try {
      const { data } = await api.postContact(contact);
      toast.success('Contact added!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return data;
    } catch ({ message }) {
      toast.error(`Ooops! ${message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });

      return rejectWithValue(message);
    }
  },
  {
    condition: (contact, { getState }) => {
      const {
        contacts: { items },
      } = getState();
      if (isDublicate(items, contact)) {
        toast.error('This contact already in the phonebook!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        return false;
      }
    },
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.deleteContactFromDB(id);
      toast.success('Contact deleted!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return data;
    } catch ({ message }) {
      toast.error(`Ooops! ${message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return rejectWithValue(message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.editContact(data);
      toast.success('Contact refreshed!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return result;
    } catch ({ message }) {
      toast.error(`Ooops! ${message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return rejectWithValue(message);
    }
  }
);
