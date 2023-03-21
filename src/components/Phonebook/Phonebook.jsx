import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import UserBar from 'components/UserBar/UserBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <>
      <UserBar />
      <ToastContainer />
    </>
  );
};
