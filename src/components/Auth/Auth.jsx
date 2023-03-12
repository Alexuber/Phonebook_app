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
          </li>
          <li>
            <NavLink to="/login" className={styles.link}>
              <Button
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: '1px solid white',
                }}
                variant="outlined"
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
