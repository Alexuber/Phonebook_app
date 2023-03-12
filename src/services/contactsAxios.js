import { authInstance } from './authAPI';

export const fetchContactsFromDB = () => authInstance.get('/contacts');

export const postContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContactFromDB = id => authInstance.delete(`/contacts/${id}`);

export const editContact = data => {
  return authInstance.patch(`/contacts/${data.id}`, {
    name: data.name,
    number: data.number,
  });
};
