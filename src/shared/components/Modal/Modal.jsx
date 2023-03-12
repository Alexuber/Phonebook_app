import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import bg from 'assets/phonebook2.jpg';
import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, children }) => {
  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);

    return () => document.body.removeEventListener('keydown', handleClose);
  }, []);

  return createPortal(
    <div
      onClick={handleClose}
      className={styles.overlay}
      style={{
        backgroundImage: `url("${bg}")`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.modal}>
        {/* <span onClick={close} className={styles.close}>
          X
        </span> */}
        <HighlightOffOutlinedIcon onClick={close} className={styles.close} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
