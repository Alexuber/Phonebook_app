import styles from './ContactsListItem.module.scss';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PropTypes from 'prop-types';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useDeleteContactMutation } from 'services/contactsAxios';
export const ContactListItem = ({
  name,
  number,
  id,
  toggleModal,
  getSelectedContact,
}) => {
  const [deleteContact] = useDeleteContactMutation();

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
          onClick={() => deleteContact(id)}
          className={styles.icon}
        />
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  getSelectedContact: PropTypes.func.isRequired,
};
