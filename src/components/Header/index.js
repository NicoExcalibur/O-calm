import React from 'react';
import PropTypes from 'prop-types';

import logo from 'src/assets/logo.png';

import Input from 'src/containers/Header/Input';
import ButtonMenu from './ButtonMenu';
import Menu from './Menu';

import './header.scss';

const Header = ({ openMenu, menuBool }) => (
  <header className="header">
    <div className="header-top">
      <Input />
      <Menu />
      <ButtonMenu openMenu={openMenu} menuBool={menuBool} />
    </div>
    <img
      src={logo}
      alt="logocalm"
      className="logo-header"
    />
  </header>
);

Header.propTypes = {
  openMenu: PropTypes.func.isRequired,
  menuBool: PropTypes.bool.isRequired,
};

export default Header;
