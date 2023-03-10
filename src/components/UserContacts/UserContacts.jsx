import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import Typography from '@mui/material/Typography';
import styles from 'pages/PhonebookPage/PhonebookPage.module.scss';

const UserContacts = () => {
  return (
    <div className={styles.container}>
      <section>
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          className={styles.title}
        >
          Phonebook
        </Typography>
        {/* <h1 className={styles.title}>Phonebook</h1> */}
        <ContactForm />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={styles.title}
        >
          Contacts
        </Typography>
        {/* <h2 className={styles.contactsTitle}>Contacts</h2> */}
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default UserContacts;
