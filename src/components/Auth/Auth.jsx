import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavBar from 'components/NavBar/NavBar';
import styles from './Auth.module.scss';

export const Auth = () => {
  return (
    <AppBar position="relative">
      <Toolbar className={styles.toolbar}>
        <NavBar />
        <ul className={styles.navList}>
          <li className={styles.item}>
            <NavLink to="/register" className={styles.link}>
              <Button
                sx={{
                  backgroundColor: '#1c62b3',
                  color: '#fff',
                  border: '1px solid white',
                }}
                variant="text"
                className={styles.btn}
              >
                Sign up
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.link}>
              <Button
                sx={{
                  backgroundColor: '#1c62b3',
                  color: '#fff',
                  border: '1px solid white',
                }}
                variant="text"
                className={styles.btn}
              >
                Login
              </Button>
            </NavLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
