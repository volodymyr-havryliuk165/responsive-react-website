import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['button_primary', 'button_secondary'];

const SIZES = ['button_medium', 'button_large'];

function Button({ children, btnStyle, size, to, onClick }) {
  const buttonType = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const buttonSize = SIZES.includes(size) ? size : SIZES[0];
  const button = <button className={`button ${buttonType} ${buttonSize}`} onClick={onClick}>{children}</button>;
  return to ? <Link to={to}>{button}</Link> : button; 
}

export default Button;
