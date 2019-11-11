import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg';
// import { Container } from './styles';
import Hamburguer from '../Hamburguer';

import './header.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container flex">
          <img className="logo-header" src={Logo} />
          <nav className="nav-menu flex">
            <Hamburguer />
            <NavLink className="nav-link" activeClassName="nav-active" exact to="/">Home</NavLink>
            <NavLink className="nav-link" activeClassName="nav-active" to="/about">About</NavLink>
            <NavLink className="nav-link" activeClassName="nav-active" to="/skills">Skills</NavLink>
            <NavLink className="nav-link" activeClassName="nav-active" to="/portfolio">Portfolio</NavLink> >
            {/* <NavLink className="nav-link" activeClassName="nav-active" to="/contact">Contact</NavLink> */}
          </nav>
        </div>
      </header>
      <div className="header-border-bottom"></div>
    </>
  );
}
