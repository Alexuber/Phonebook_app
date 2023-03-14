import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validateInputs } from 'services/validationForm';
import Typography from '@mui/material/Typography';
import { registerUser, signInUser } from 'redux/auth/auth-operations';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="http://localhost:3000/goit-react-hw-08-phonebook"
      >
        Phonebook
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const SignUpSignInForm = () => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState({ email: false, password: false });
  const location = useLocation();
  const onSignUp = location.pathname === '/register';
  const onSignIn = location.pathname === '/login';

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userRegister = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    const userLogin = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (userRegister.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
      return;
    }
    if (userRegister.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (userRegister.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }
    if (!validateInputs(userRegister)) {
      return;
    }
    if (onSignUp) {
      dispatch(registerUser(userRegister));
    }
    if (onSignIn) {
      dispatch(signInUser(userLogin));
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        {onSignUp ? 'Sign Up' : 'Sign In'}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {onSignUp && (
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                error={empty.name}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={empty.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={empty.password}
            />
          </Grid>
          {onSignUp && (
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          )}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            '&:disabled': {
              backgroundColor: 'rgb(25 118 210 / 49%)',
              color: 'white',
            },
          }}
        >
          {onSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            {onSignUp && (
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            )}
            {onSignIn && (
              <Link href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            )}
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} style={{ marginTop: '250px' }} />
      </Box>
    </>
  );
};

export default SignUpSignInForm;
