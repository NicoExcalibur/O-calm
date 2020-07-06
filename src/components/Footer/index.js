import React from 'react';

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
      <a className="legal-mentions">
        Mentions légales
      </a>
      <a className="about">
        A propos
      </a>
    </div>
  </footer>
);

export default Footer;
