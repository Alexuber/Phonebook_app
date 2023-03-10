import { combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filterSlice';
import persistedAuthReducer from './auth/auth.slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
