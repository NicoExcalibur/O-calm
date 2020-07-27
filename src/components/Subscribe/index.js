import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';

import logo from 'src/assets/images/logo.png';
import './subscribe.scss';

const Subscribe = ({ subArray, insertSubscribe, sendSubscribe }) => {
  let inputValue;
  const getPassword = (event) => {
    const inputPassword = event.currentTarget.value;
    inputValue = inputPassword;
  };

  let secondInputValue;
  const getConfirmation = (event) => {
    const inputConfirmation = event.currentTarget.value;
    secondInputValue = inputConfirmation;
  };

  let errorMessage;
  const comparePassword = () => {
    if (inputValue === secondInputValue) {
      errorMessage = '';
      ReactDOM.render(errorMessage, document.getElementById('wrong-pass'));
      return true;
    }
    if (inputValue !== secondInputValue) {
      errorMessage = 'Le mot de passe n\'est pas identique';
      ReactDOM.render(errorMessage, document.getElementById('wrong-pass'));
    }
  };

  const subFormValue = {};
  const handleSub = (event) => {
    if (comparePassword() == true) {
      const loginFormData = new FormData(event.currentTarget);
      subFormValue.password = loginFormData.get('password');
      subFormValue.avatar = loginFormData.get('avatar');
      subFormValue.email = loginFormData.get('email');
      subFormValue.username = loginFormData.get('username');
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="subscribe">
      <div className="left-subscribe">
        <h1>créez votre petit coin o'calm !</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSub(event);
            insertSubscribe(subFormValue);
            sendSubscribe();
            goBack();
            console.log(subArray);
          }}
        >

          {/* <label htmlFor="avatar" className="choose-file">Choisissez une photo de profil */}

          {/* <div className="avatar-container">
            <img className="picture" src={avatar} alt="votre avatar" />
          </div>
          <label className="choose-file">Choisissez une photo de profil
            <input name="avatar" type="file" className="avatar" accept="image/png, image/jpeg" />
          </label> */}
          <label htmlFor="email">Rentrez votre e-mail *
            <input
              name="email"
              type="mail"
              className="input-login"
              placeholder="votreadresse@mail.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <span className="error-mail" />
          </label>
          <label htmlFor="username">Choisissez un pseudo *
            <input
              name="username"
              type="text"
              className="input-login"
              placeholder="votre-pseudo"
              pattern="[a-z0-9._-]{3,15}"
              required
            />
            <span className="error-pseudo" />
          </label>
          <label htmlFor="password">Rentrez votre mot de passe *
            <strong className="required-elements">
              Ce mot de passe doit contenir au moins <em className="required">8 caractères</em> dont 
              une <em className="required">minuscule</em>, une <em className="required">majuscule</em> et
              un <em className="required">chiffre</em>.
            </strong>
            <input
              name="password"
              type="password"
              className="input-login"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              placeholder="votre mot de passe"
              required
              onBlur={(event) => {
                getPassword(event);
                console.log(inputValue);
              }}
            />
            <span className="error-pass" />
          </label>
          <label htmlFor="confirmation">Confirmez votre mot de passe *
            <input
              name="confirmation"
              type="password"
              className="input-login validation"
              placeholder="validez votre mot de passe"
              required
              onBlur={(event) => {
                getConfirmation(event);
                comparePassword(event);
              }}
            />
          </label>

          <div id="wrong-pass" />
          <div className="required">* veuillez remplir ces champs</div>
          <button
            type="submit"
            className="submit"
          >
            Entrer dans le zen
          </button>
        </form>
        <div className="back">
          <p className="go-back">
            oh, vous aviez déjà un compte ?
          </p>
          <NavLink
            to="/"
            exact
          >
            <ArrowLeftCircle className="go-back-link" size={50} />
          </NavLink>
        </div>
      </div>
      <img className="logo" src={logo} alt="Logo O'Calm" />
    </div>
  );
};

Subscribe.propTypes = {
  subArray: PropTypes.object.isRequired,
  insertSubscribe: PropTypes.func.isRequired,
  sendSubscribe: PropTypes.func.isRequired,
};

export default Subscribe;
