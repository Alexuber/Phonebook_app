import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
