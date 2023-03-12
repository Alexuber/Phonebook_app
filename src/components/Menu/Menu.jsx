import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './Menu.module.scss';
import { selectorIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function BasicMenu() {
  const isLogin = useSelector(selectorIsLogin);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountCircleIcon
        sx={{ mr: 2, cursor: 'pointer' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </MenuItem>
        {isLogin && location.pathname !== '/phonebook' && (
          <MenuItem onClick={handleClose}>
            <NavLink to="/phonebook" className={styles.link}>
              Phonebook
            </NavLink>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className={styles.link}>
            About
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className={styles.link}>
            Terms
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
