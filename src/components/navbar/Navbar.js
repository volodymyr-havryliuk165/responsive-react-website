import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  return (
    <nav className={styles.navbar}>
      <Logo />
      <FontAwesomeIcon
        icon={faAnglesLeft}
        onClick={handleClick}
        className={classNames(styles.navbar__toggle, {
          [styles.navbar__toggle_active]: active,
        })}
      />
      <ul className={classNames(styles.navbar__menu, {
        [styles.navbar__menu_collapsed]: !active,
      })}>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Home</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Send</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Help</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Home</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Home</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__link} to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
