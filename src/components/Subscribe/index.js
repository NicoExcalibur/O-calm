import React from 'react';

import logo from 'src/assets/logo.png';
import './subscribe.scss';

const Subscribe = () => (
  <div className="subscribe">
    <div className="left-subscribe">
      <h1>créez votre petit coin o'calm !</h1>
      <form>
        <label className="choose-file">Choisissez une photo de profil
          <input type="file" className="avatar" accept="image/png, image/jpeg" />
        </label>
        <label>Rentrez votre e-mail
          <input type="mail" className="input-login" placeholder="E-mail" />
        </label>
        <label>Choisissez un pseudo
          <input type="text" className="input-login" placeholder="Pseudo" />
        </label>
        <label>Rentrez votre mot de passe
          <input type="password" className="input-login" placeholder="Mot de passe" />
        </label>
        <label>Confirmez votre mot de passe
          <input type="password" className="input-login validation" placeholder="Validation du mot de passe" />
        </label>
        <button type="submit" className="submit">Entrer dans le zen</button>
      </form>
    </div>
    <img className="logo" src={logo} alt="Logo O'Calm" />
  </div>
);

export default Subscribe;
