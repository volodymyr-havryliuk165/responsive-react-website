import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './ThemeSwitch.module.css';
import classNames from 'classnames';

function ThemeSwitch({ theme, setTheme }) {
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <FontAwesomeIcon
      className={classNames(styles.themeSwitch, styles[theme])}
      onClick={toggleTheme}
      icon={theme === 'light' ? faSun : faMoon}
    />
  );
}

export default ThemeSwitch;
