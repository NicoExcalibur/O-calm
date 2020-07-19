import React from 'react';

import logo from 'src/assets/images/logo.png';
import backimage from 'src/assets/images/403.png';

const error403 = () => (
  <div className="error-page">
    <div className="header">
      <img src={logo} alt="Logo O'Calm" />
    </div>
    <div className="error">
      <img src={backimage} alt="error 403" />
      <h1>Accès interdit</h1>
      <p>
        Ah, il semblerait que vous n'ayez pas accès à cette page ! C'est vrai
        que le monde de la relaxation est exaltant, mais ne vous aventurez pas
        trop loin non plus ...
      </p>
      <a>revenir à la page d'accueil</a>
    </div>
  </div>
);

export default error403;
