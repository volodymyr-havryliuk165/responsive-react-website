import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/about' },
    { id: 3, text: 'Products', to: '/help' },
    { id: 4, text: 'Sign in', to: '/signup', extraClass: 'navbar__button navbar__button_sign-up' },
  ];

  return (
    <nav className="navbar">
      <Logo />
      <FontAwesomeIcon
        icon={faAnglesLeft}
        onClick={handleClick}
        className={`navbar__toggle ${active ? 'navbar__toggle_active' : ''}`}
      />
      <ul className={`navbar__menu ${!active ? 'navbar__menu_collapsed' : ''}`}
      style={{"--children-number": navItems.length}}>
        {navItems.map((item) => {
          return (
            <li key={item.id} className="navbar__item">
              <Link className={`navbar__link ${item.extraClass ?? ''}`} to={item.to}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
