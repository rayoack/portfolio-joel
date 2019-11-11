import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Container } from './styles';
import './hamburguer.css';
import { func } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/prop-types';

export default function Hamburguer() {
  const [checked, setChecked] = useState(false);

  function changeMenu() {
    return setChecked(!checked)
  }

  function closeMenu() {
    return setChecked(false)
  }

  return (
    <>
      <input 
        id="menu-hamburguer"
        type="checkbox"
        checked={checked}
        onChange={changeMenu}
      />

      <label for="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>

      <nav className="nav-menu-hamburguer flex">
        <NavLink className="nav-link-hamburguer" activeClassName="nav-active" onClick={closeMenu} exact to="/">Home</NavLink>
        <NavLink className="nav-link-hamburguer" activeClassName="nav-active" onClick={closeMenu} to="/about">About</NavLink>
        <NavLink className="nav-link-hamburguer" activeClassName="nav-active" onClick={closeMenu} to="/skills">Skills</NavLink>
        <NavLink className="nav-link-hamburguer" activeClassName="nav-active" onClick={closeMenu} to="/portfolio">Portfolio</NavLink> >
        {/* <NavLink className="nav-link" activeClassName="nav-active" to="/contact">Contact</NavLink> */}
      </nav>
    </>
  );
}
