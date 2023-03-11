import styles from './ContactsListItem.module.scss';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PropTypes from 'prop-types';

export const ContactListItem = ({
  name,
  number,
  deleteContact,
  editContact,
}) => {
  return (
    <li className={styles.item}>
      <ContactPhoneOutlinedIcon className={styles.iconUser} />
      <div className={styles.info}>
        <span className={styles.name}>{name}: </span>
        <span>{number}</span>
      </div>
      <div className={styles.actions}>
        <ModeEditOutlineOutlinedIcon
          onClick={editContact}
          className={styles.icon}
        />
        <DeleteOutlineOutlinedIcon
          onClick={deleteContact}
          className={styles.icon}
        />
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
