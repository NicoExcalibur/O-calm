import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Power } from 'react-feather';
import { NavLink } from 'react-router-dom';

const Menu = ({ currentUser, userProfile }) => (
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
    <a href="/" className="logout">
      Déconnexion
      <Power />
    </a>
  </nav>
);


Menu.propTypes = {
  userProfile: PropTypes.func.isRequired,
  currentUser: PropTypes.arrayOf(
    PropTypes.shape({
      roles: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Menu;
