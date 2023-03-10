import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import styles from './UserBar.module.scss';

const UserBar = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="relative">
      <Toolbar className={styles.toolbar}>
        <Box className={styles.box}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          <Typography variant="subtitle2" color="inherit" noWrap>
            alex@i.ua
          </Typography>
        </Box>
        <Typography variant="h6" color="inherit" noWrap>
          Welcome, Alex!
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
  );
};

export default UserBar;
