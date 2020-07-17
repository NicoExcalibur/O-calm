import React from 'react';
import ReactDOM from 'react-dom';

import logo from 'src/assets/images/logo.png';
import './subscribe.scss';

const Subscribe = () => {
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
      // subFormValue.confirmation = loginFormData.get('confirmation');
      subFormValue.password = loginFormData.get('password');
      subFormValue.avatar = loginFormData.get('avatar');
      subFormValue.email = loginFormData.get('email');
      subFormValue.username = loginFormData.get('username');
    }
  };

  return (
    <div className="subscribe">
      <div className="left-subscribe">
        <h1>créez votre petit coin o'calm !</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSub(event);
            console.log(subFormValue);
          }}
        >
          <label className="choose-file">Choisissez une photo de profil
            <input name="avatar" type="file" className="avatar" accept="image/png, image/jpeg" />
          </label>
          <label htmlFor="email">Rentrez votre e-mail *
            <input
              name="email"
              type="mail"
              className="input-login"
              placeholder="E-mail"
              required
            />
          </label>
          <label htmlFor="username">Choisissez un pseudo *
            <input name="username" type="text" className="input-login" placeholder="Pseudo" required />
          </label>
          <label htmlFor="password">Rentrez votre mot de passe *
            <input
              name="password"
              type="password"
              className="input-login"
              placeholder="Mot de passe"
              required
              onBlur={(event) => {
                getPassword(event);
                console.log(inputValue);
              }}
            />
          </label>
          <label htmlFor="confirmation">Confirmez votre mot de passe *
            <input
              name="confirmation"
              type="password"
              className="input-login validation"
              placeholder="Validation du mot de passe"
              required
              onBlur={(event) => {
                getConfirmation(event);
                comparePassword(event);
                console.log(errorMessage);
              }}
            />
          </label>
          <div id="wrong-pass"></div>
          <div className="required">* veuillez impérativement remplir ces champs</div>
          <button type="submit" className="submit">Entrer dans le zen</button>
        </form>
      </div>
      <img className="logo" src={logo} alt="Logo O'Calm" />
    </div>
  );
};
export default Subscribe;
