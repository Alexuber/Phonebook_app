import { userSignUp, userLogin, logout, current } from 'services/authAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignUp(data);
      toast.success('Successfully registered!', {
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

export const signInUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);

      toast.success('Successfully logged!', {
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

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logout();
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();

      const { data } = await current(token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        return false;
      }
    },
  }
);
