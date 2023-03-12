import styles from './ContactsListItem.module.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PropTypes from 'prop-types';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export const ContactListItem = ({
  name,
  number,
  id,
  deleteContact,
  toggleModal,
  getSelectedContact,
}) => {
  const handleEditClick = () => {
    toggleModal();
    getSelectedContact(id);
  };
  return (
    <li className={styles.item}>
      <div className={styles.user}>
        <AccountCircleTwoToneIcon className={styles.iconUser} />
        <div className={styles.info}>
          <span className={styles.name}>{name} </span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <ModeEditOutlineOutlinedIcon
          onClick={handleEditClick}
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
