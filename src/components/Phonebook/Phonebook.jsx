import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<PhonebookPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </Routes>
  );
};
