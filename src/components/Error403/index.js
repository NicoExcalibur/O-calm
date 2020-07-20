import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/assets/images/logo.png';

import './error403.scss';

const Error403 = () => (
  <div className="error-page">
    <div className="header">
      <NavLink
        to="/"
        exact
      >
        <img className="logo" src={logo} alt="Logo O'Calm" />
      </NavLink>
    </div>
    <div className="error">
      <h1>403</h1>
      <h2>Accès interdit</h2>
      <p>
        Ah, il semblerait que vous n'ayez pas accès à cette page ! C'est vrai
        que le monde de la relaxation est exaltant, mais ne vous aventurez pas
        trop loin non plus ...
      </p>
      <NavLink
        to="/"
        exact
        className="home"
      >
        revenir à la page d'accueil
      </NavLink>
    </div>
  </div>
);

export default Error403;
