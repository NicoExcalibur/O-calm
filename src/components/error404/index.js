import React from 'react';

import logo from 'src/assets/images/logo.png';
import backimage from 'src/assets/images/404.png';

const error404 = () => (
  <div className="error-page">
    <div className="header">
      <img src={logo} alt="Logo O'Calm" />
    </div>
    <div className="error">
      <img src={backimage} alt="error 404" />
      <h1>Page inexistante</h1>
      <p>
        Vous avez tenté d'accéder à une page qui n'existe pas ou n'existe plus,
        et nous sommes vraiment désolée pour cet incident.
      </p>
      <a>revenir à la page d'accueil</a>
    </div>
  </div>
);

export default error404;
