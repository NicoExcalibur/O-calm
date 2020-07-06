import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/assets/logo-footer.png';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <img
      src={logo}
      alt="logo"
      className="logo-footer"
    />
    <div className="links">
      <NavLink
        className="legal-mentions"
        to="/legal"
        exact
        activeClassName="footer-active"
      >
        Mentions légales
      </NavLink>
      <NavLink
        className="about"
        to="/about"
        exact
        activeClassName="footer-active"
      >
        À propos
      </NavLink>
    </div>
  </footer>
);

export default Footer;
