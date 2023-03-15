import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';
import { contactsApi } from 'services/contactsAxios';
import { authApi } from 'services/authAPI';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import filterReducer from './filter/filterSlice';
import persistedAuthReducer from './auth/auth.slice';
import contactsReducer from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contactsApi: contactsApi.reducer,
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
    authApi: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
