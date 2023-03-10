import { userSignUp, userLogin, logout, current } from 'services/authAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await userSignUp(data);
      return result;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const signInUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      return result;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logout();
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
