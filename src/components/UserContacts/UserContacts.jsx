import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import Typography from '@mui/material/Typography';
import styles from './UserContacts.module.scss';
import bg from 'assets/phonebook1.jpg';

const UserContacts = () => {
  return (
    <div
      className={styles.userContainer}
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
          className={styles.contactsTitle}
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
