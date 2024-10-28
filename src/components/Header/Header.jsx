import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.appBar}>
      <div className="container">
        <div className={styles.toolbar}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Travel Trucks Logo" />
          </Link>
          <nav className={styles.navigation}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
            >
              Catalog
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
