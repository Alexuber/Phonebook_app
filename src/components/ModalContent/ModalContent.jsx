import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styles from './ModalContent.module.scss';
import Typography from '@mui/material/Typography';
import { useEditContactMutation } from 'services/contactsAxios';
import { toast } from 'react-toastify';

const ModalContent = ({ selectedContact, toggleModal }) => {
  const [changeContact] = useEditContactMutation();

  const [state, setState] = useState(selectedContact || {});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async event => {
    try {
      event.preventDefault();
      await changeContact({ ...state });
      toast.success('Contact refreshed!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      toggleModal();
    } catch (error) {
      toast.error(`Ooops! ${error.message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
      console.log('🆑  error:', error.message);
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleFormSubmit}
        sx={{ mt: 1 }}
      >
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={styles.title}
        >
          Make changes here
        </Typography>
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
          value={state.name}
          placeholder="Enter name..."
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
          value={state.number}
          placeholder="Enter phone..."
        />
        <Button
          type="submit"
          className={styles.btn}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Edit
        </Button>
      </Box>
    </>
  );
};

export default ModalContent;

ModalContent.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  selectedContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
