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
      <li className={styles.item}>
        <NavLink to="/" className={styles.link}>
          About
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/" className={styles.link}>
          Terms and Conditions
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
