import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.scss';
import background from 'assets/phonebook6.jpg';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${background}")`,
        width: '100vw',
        height: '93.2vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <NavLink to="/register" className={styles.link}>
        <Button
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            border: '1px solid white',
          }}
          variant="outlined"
          className={styles.btn}
        >
          Sign up
        </Button>
      </NavLink>
    </div>
  );
};

export default HomePage;

// Hi! Welcome to PhoneBook!

// This application will help you to save all your contacts in one place.
// After the fast registration, you will have the possibility to add, delete and edit your contacts.

// All your contacts will be stored on our secure server and available to you at any time.
// Interested?
// Register here
