import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/assets/images/logo.png';
import backimage from 'src/assets/images/500.png';

import './error500.scss';

const Error500 = () => (
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
      <img className="back-image" src={backimage} alt="error 500" />
      <h1>Erreur serveur interne</h1>
      <p>
        Il semblerait que quelque chose ce soit passé de notre côté, notre
        serveur n'a pas l'air de vouloir répondre. Pas de panique, nous sommes
        sur le problème!
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

export default Error500;
