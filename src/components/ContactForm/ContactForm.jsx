import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import { useAddContactMutation } from 'services/contactsAxios';
import styles from './ContactsForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const [empty, setEmpty] = useState({ name: false, number: false });

  const [addNewContact, result] = useAddContactMutation();

  const addContact = data => {
    if (data.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
    }
    if (data.number === '') {
      setEmpty(prev => ({ ...prev, number: true }));
    }
    if (
      !/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(
        data.name
      )
    ) {
      return toast.error(`Invalid name format!`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
    if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
        data.number
      )
    ) {
      return toast.error(`Invalid number format!`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
    addNewContact(data);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === '' || value === '') {
      setEmpty(true);
    }
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addContact({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emptyField = state.number === '' || state.name === '';

  const { name, number } = state;
  return (
    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        placeholder="Enter name..."
        error={empty.name}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label="Phone"
        type="phone"
        id="tel"
        autoComplete="current-password"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        placeholder="Enter phone..."
        error={empty.number}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={emptyField}
        className={styles.addBtn}
      >
        Add contact
      </Button>
    </Box>
  );
};
