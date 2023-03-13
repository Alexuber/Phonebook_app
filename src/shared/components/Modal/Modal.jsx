import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import bg from 'assets/phonebook2.jpg';
import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, children }) => {
  const handleClose = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);

    return () => document.body.removeEventListener('keydown', handleClose);
  }, [handleClose]);

  return createPortal(
    <div
      onClick={handleClose}
      className={styles.overlay}
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),url("${bg}")`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.modal}>
        <HighlightOffOutlinedIcon onClick={close} className={styles.close} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
