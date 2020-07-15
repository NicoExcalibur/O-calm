import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './login.scss';
import logo from 'src/assets/images/logo.png';

const Login = ({ saveLogin, verifLogin, token }) => {
  const loginFormValue = [];
  const handleLogin = (event) => {
    const loginFormData = new FormData(event.currentTarget);
    loginFormValue.username = loginFormData.get('username');
    loginFormValue.password = loginFormData.get('password');
    saveLogin(loginFormValue);
  };
  return (
    <div className="login">
      <img className="logo" src={logo} alt="Logo O'Calm" />
      <div className="right-login">
        <h1>retrouvez votre petit coin o'calm</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin(event);
            verifLogin();
          }}
        >
          <input name="username" type="text" className="input-login" placeholder="Pseudo" />
          <input name="password" type="password" className="input-login" placeholder="Mot de passe" />
          <button type="submit" className="submit">Entrer dans le zen</button>
        </form>
        <div className="subscribe">
          <p className="question">
            vous n'avez pas encore de coin o'calm ?
          </p>
          <NavLink
            to="/subscribe"
            exact
          >
            <p className="new-account">Créez mon compte</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
  verifLogin: PropTypes.func.isRequired,
  token: PropTypes.object.isRequired,
};

export default Login;
