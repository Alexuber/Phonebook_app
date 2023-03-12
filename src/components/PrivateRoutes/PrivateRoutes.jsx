import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorIsLogin, selectorToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { SpinnerClock } from 'shared/components/Modal/Spinner/Spinner';

const PrivateRoutes = () => {
  const login = useSelector(selectorIsLogin);
  const token = useSelector(selectorToken);
  if (!login && token) {
    return <SpinnerClock />;
  }
  if (login && token) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
