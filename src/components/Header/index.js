import React from 'react';

import logo from 'src/assets/logo.png';

import Input from './Input';
import ButtonMenu from './ButtonMenu';
import Menu from './Menu';

const Header = () => (
  <header className="header">
    <Input />
    <Menu />
    <img
      src={logo}
      alt="logocalm"
      className="logo-header"
    />
  </header>
);

export default Header;
