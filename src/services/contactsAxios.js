import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';

const contactsInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchContactsFromDB = () => contactsInstance.get('/contacts');

export const postContact = contact =>
  contactsInstance.post('/contacts', { ...contact });

export const deleteContactFromDB = id =>
  contactsInstance.delete(`/contacts/${id}`);
