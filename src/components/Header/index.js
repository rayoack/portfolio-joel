import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg';
// import { Container } from './styles';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container flex">
        <img className="logo-header" src={Logo} />
        <nav className="nav-menu">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
