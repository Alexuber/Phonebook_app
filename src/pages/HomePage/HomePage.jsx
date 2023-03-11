import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import phonebook from 'assets/phonebook3.jpg';
import styles from './HomePage.module.scss';
import background from 'assets/phonebook6.jpg';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${background}")`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};

export default HomePage;

// Hi! Welcome to PhoneBook!

// This application will help you to save all your contacts in one place.
// After the fast registration, you will have the possibility to add, delete and edit your contacts.

// All your contacts will be stored on our secure server and available to you at any time.
// Interested?
// Register here
