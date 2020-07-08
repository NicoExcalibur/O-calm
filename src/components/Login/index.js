import React from 'react';

import './login.scss';
import logo from 'src/assets/logo.png';

const Login = () => (
  <div className="login">
    <img className="logo" src={logo} alt="Logo O'Calm" />
    <div className="right-login">
    <h1>Connectez vous pour entrer dans le zen</h1>
      <form>
        <input type="mail" className="input-login" placeholder="E-mail" />
        <input type="password" className="input-login" placeholder="Mot de passe" />
        <button type="submit" className="submit">Entrer dans le zen</button>
      </form>
      <div className="subscribe">
        <p className="question">
          Vous n'avez pas encore de compte ?
        </p>
        <a href="#" className="new-account">
          S'inscrire
        </a>
      </div>
    </div>
  </div>
);

export default Login;
