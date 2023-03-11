import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import { Auth } from 'components/Auth/Auth';
import styles from './UserBar.module.scss';
import {
  selectorIsLogin,
  selectorName,
  selectorEmail,
} from 'redux/auth/auth-selectors';

const UserBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectorName);
  const isLogin = useSelector(selectorIsLogin);
  const email = useSelector(selectorEmail);

  return (
    <>
      {isLogin ? (
        <AppBar position="relative">
          <Toolbar className={styles.toolbar}>
            <Box className={styles.box}>
              <AccountCircleIcon sx={{ mr: 2 }} />
              <Typography variant="subtitle2" color="inherit" noWrap>
                {email}
              </Typography>
            </Box>
            <Typography variant="h6" color="inherit" noWrap>
              Welcome, {name}!
            </Typography>
            <Button
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                border: '1px solid white',
              }}
              className={styles.btn}
              variant="outlined"
              onClick={() => dispatch(logoutUser())}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default UserBar;
