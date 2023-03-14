import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.scss';
import background from 'assets/phonebook6.jpg';
import { selectorIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLogin = useSelector(selectorIsLogin);

  return (
    <div
      style={{
        backgroundImage: `url("${background}")`,
        width: '100vw',
        height: '93.2vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '280px',
      }}
    >
      <div className={styles.info}>
        <h1 className={styles.phonebook}>Hi! Welcome to PhoneBook!</h1>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <p className={styles.text}>
              &nbsp;&nbsp;&nbsp; This application will help you to save all your
              contacts in one place. After the fast registration, you will have
              the possibility to add, delete and edit your contacts. <br></br>
              &nbsp;&nbsp;&nbsp; All your contacts will be stored on our secure
              server and available to you at any time.
            </p>
            {!isLogin && (
              <p className={styles.text}>
                &nbsp;&nbsp;&nbsp; Interested? Register here ...
              </p>
            )}
          </div>
        </div>
        <NavLink to="/register" className={styles.link}>
          {!isLogin && (
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
          )}
        </NavLink>
      </div>
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
