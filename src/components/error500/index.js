import React from 'react';

import logo from 'src/assets/images/logo.png';
import backimage from 'src/assets/images/500.png';

const error500 = () => (
  <div className="error-page">
    <div className="header">
      <img src={logo} alt="Logo O'Calm" />
    </div>
    <div className="error">
      <img src={backimage} alt="error 500" />
      <h1>Erreur serveur interne</h1>
      <p>
        Il semblerait que quelque chose ce soit passé de notre côté, notre
        serveur n'a pas l'air de vouloir répondre. Pas de panique, nous sommes
        sur le problème!
      </p>
      <a>revenir à la page d'accueil</a>
    </div>
  </div>
);

export default error500;
