import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRightCircle } from 'react-feather';

import './login.scss';
import Ocalm from '../Ocalm';
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
          <label htmlFor="username">Votre pseudo</label>
          <input name="username" type="text" className="input-login" placeholder="Pseudo" />
          <label htmlFor="password">Votre mot de passe</label>
          <input name="password" type="password" className="input-login" placeholder="Mot de passe" />
          <button type="submit" className="submit">
            <ArrowRightCircle className="connect" size={60} />
          </button>
        </form>
        <div className="subscribe">
          <p className="question">
            vous n'avez pas encore de coin o'calm ?
          </p>
          <NavLink
            to="/subscribe"
            exact
          >
            <p className="new-account"> + créer un compte</p>
          </NavLink>
        </div>
      </div>
      <NavLink
        className="what"
        to="/about-ocalm"
        exact
      >
        C'est quoi, O'Calm ?
      </NavLink>
    </div>
  );
};

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
  verifLogin: PropTypes.func.isRequired,
  token: PropTypes.object.isRequired,
};

export default Login;
