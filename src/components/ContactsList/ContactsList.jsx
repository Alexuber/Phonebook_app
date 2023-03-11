import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getFilteredContacts,
  getError,
  getIsLoading,
} from 'redux/contacts/selectors';
import {
  fetchContacts,
  deleteContact,
  changeContact,
} from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import styles from './ContactsList.module.scss';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtered = useSelector(getFilteredContacts);
  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  const getSelectedContact = id => {
    const selectedContact = contacts.find(item => item.id === id);
    setSelectedContact(selectedContact);
  };

  // const editContact = (id, data) => {
  //   console.log('id', id);
  //   console.log('data', data);
  //   dispatch(changeContact(id, data));
  //   toggleModal();
  // };

  return (
    <>
      <ul className={styles.list}>
        {isLoading && contacts.length === 0 && (
          <div style={{ color: 'red' }}> Loading contacts...</div>
        )}
        {filtered.map(contact => {
          const { id, name, number } = contact;

          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={() => dispatch(deleteContact(id))}
              toggleModal={toggleModal}
              getSelectedContact={getSelectedContact}
            />
          );
        })}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </ul>
      {showModal && (
        <Modal close={toggleModal}>
          <ModalContent
            selectedContact={selectedContact}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
