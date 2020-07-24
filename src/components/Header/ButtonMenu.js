import React from 'react';
import { Menu } from 'react-feather';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonMenu = ({ openMenu, menuBool }) => (
  <div className="menu-button">
    <Menu
      size={40}
      onClick={openMenu}
      className="burger"
    />
    {menuBool && (
      <nav className="menu-burger">
        <NavLink
          className="nav"
          to="/"
          exact
          activeClassName="nav-active"
          onClick={openMenu}
        >
          Accueil
        </NavLink>
        <NavLink
          className="nav"
          to="/research"
          exact
          activeClassName="nav-active"
          onClick={openMenu}
        >
          Parcourir
        </NavLink>
        <NavLink
          className="nav"
          to="/favorites"
          exact
          activeClassName="nav-active"
          onClick={openMenu}
        >
          Favoris
        </NavLink>
        <NavLink
          className="nav"
          to="/account"
          exact
          activeClassName="nav-active"
          onClick={openMenu}
        >
          Profil
        </NavLink>
        <a href="/" className="logout">Déconnexion</a>
      </nav>
    )}
  </div>
);

ButtonMenu.propTypes = {
  openMenu: PropTypes.func.isRequired,
  menuBool: PropTypes.bool.isRequired,
};

export default ButtonMenu;
