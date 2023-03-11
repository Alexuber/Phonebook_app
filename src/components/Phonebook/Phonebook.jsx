import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import UserRoutes from 'UserRoutes';
import UserBar from 'components/UserBar/UserBar';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <>
      <UserBar />
      <UserRoutes />
    </>
  );
};
