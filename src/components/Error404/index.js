import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/assets/images/logo.png';
import backimage from 'src/assets/images/404.png';

import './error404.scss';

const Error404 = () => (
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
      <img className="back-image" src={backimage} alt="error 404" />
      <h1>Page inexistante</h1>
      <p>
        Vous avez tenté d'accéder à une page qui n'existe pas ou n'existe plus,
        et nous sommes vraiment désolée pour cet incident.
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

export default Error404;
