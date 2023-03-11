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
        <ContactForm />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={styles.title}
        >
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default UserContacts;
