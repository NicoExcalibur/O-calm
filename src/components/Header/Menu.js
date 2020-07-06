import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <nav className="menu">
    <NavLink
      className="nav"
      to="/"
      exact
      activeClassName="nav-active"
    >
      Accueil
    </NavLink>
    <NavLink
      className="nav"
      to="/research"
      exact
      activeClassName="nav-active"
    >
      Parcourir
    </NavLink>
    <NavLink
      className="nav"
      to="/favorites"
      exact
      activeClassName="nav-active"
    >
      Favoris
    </NavLink>
    <NavLink
      className="nav"
      to="/account"
      exact
      activeClassName="nav-active"
    >
      Profil
    </NavLink>
    <a href="#" className="logout">Déconnexion</a>
  </nav>
);

export default Menu;
