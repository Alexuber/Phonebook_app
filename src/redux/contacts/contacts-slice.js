import { createSlice } from '@reduxjs/toolkit';
import * as operations from './contacts-operations';

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContacts.pending, handlePending)
      .addCase(operations.fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(operations.fetchContacts.rejected, handleRejected)
      .addCase(operations.addContactOnServer.pending, handlePending)
      .addCase(
        operations.addContactOnServer.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.items.push(payload);
        }
      )
      .addCase(operations.addContactOnServer.rejected, handleRejected)
      .addCase(operations.deleteContact.pending, handlePending)
      .addCase(operations.deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(operations.deleteContact.rejected, handleRejected)
      .addCase(operations.changeContact.pending, handlePending)
      .addCase(operations.changeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const filtered = state.items.filter(({ id }) => payload.id !== id);
        filtered.push(payload);
        state.items = filtered;
      })
      .addCase(operations.changeContact.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;
