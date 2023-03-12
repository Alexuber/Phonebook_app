import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SpinnerClock } from 'shared/components/Modal/Spinner/Spinner';

const PhonebookPage = lazy(() => import('./pages/PhonebookPage/PhonebookPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const PrivateRoutes = lazy(() =>
  import('./components/PrivateRoutes/PrivateRoutes')
);
const PublicRoutes = lazy(() =>
  import('./components/PublicRoutes/PublicRoutes')
);
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<SpinnerClock />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/phonebook" element={<PhonebookPage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
