import './styles/style.scss';
import { Phonebook } from 'components/Phonebook/Phonebook';
import UserRoutes from 'UserRoutes';
export const App = () => {
  return (
    <>
      <Phonebook />
      <UserRoutes />
    </>
  );
};
