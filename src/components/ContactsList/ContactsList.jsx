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
  const [selected, setSelected] = useState({});
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleEditContact = id => {
    setShowModal(true);
    const selectedContact = contacts.find(item => id === item.id);

    setSelected(selectedContact);
  };

  const submitEditContact = (id, state) => {
    dispatch(changeContact(id, { name: state.name, number: state.number }));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtered = useSelector(getFilteredContacts);
  const hideModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

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
              name={name}
              number={number}
              deleteContact={() => dispatch(deleteContact(id))}
              editContact={() => handleEditContact(id)}
            />
          );
        })}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </ul>
      {showModal && (
        <Modal close={hideModal}>
          <ModalContent
            selected={selected}
            submitEditContact={submitEditContact}
          />
        </Modal>
      )}
    </>
  );
};
