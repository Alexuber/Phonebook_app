import axios from 'axios';
import { authInstance } from './authAPI';

export const fetchContactsFromDB = () => authInstance.get('/contacts');

export const postContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContactFromDB = id => authInstance.delete(`/contacts/${id}`);

export const editContact = (id, data) => {
  console.log('🆑  data:', data);

  console.log('🆑  id:', id);

  authInstance.patch(`/contacts/${id}`, data);
};
