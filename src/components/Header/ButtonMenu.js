import React from 'react';
import { Menu } from 'react-feather';
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
        <a>Accueil</a>
        <a>Parcourir</a>
        <a>Favoris</a>
        <a>Profil</a>
        <a>Se déconnecter</a>
      </nav>
    )}
  </div>
);

ButtonMenu.propTypes = {
  openMenu: PropTypes.func.isRequired,
  menuBool: PropTypes.bool.isRequired,
};

export default ButtonMenu;
