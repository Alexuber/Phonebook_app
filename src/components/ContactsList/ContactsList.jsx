import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { useState } from 'react';
import { SpinnerDots } from 'shared/components/Modal/Spinner/Spinner';
import Modal from 'shared/components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import { useFetchContactsQuery } from 'services/contactsAxios';
import styles from './ContactsList.module.scss';

export const ContactList = () => {
  const { data: contacts = [], error, isLoading } = useFetchContactsQuery();
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const filter = useSelector(getFilter);

  const filterContacts = (filter, contacts) => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return result;
  };

  const filtered = filterContacts(filter, contacts);

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  const getSelectedContact = id => {
    const selectedContact = contacts.find(item => item.id === id);
    setSelectedContact(selectedContact);
  };

  return (
    <>
      <ul className={styles.list}>
        {isLoading && contacts.length === 0 && <SpinnerDots />}
        {filtered.map(contact => {
          const { id, name, number } = contact;

          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              toggleModal={toggleModal}
              getSelectedContact={getSelectedContact}
            />
          );
        })}
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
