import React from 'react';

import logo from 'src/assets/images/logo.png';
import './subscribe.scss';

const Subscribe = () => {
  const subFormValue = {};
  const handleSub = (event) => {
    const loginFormData = new FormData(event.currentTarget);
    if (subFormValue.password === subFormValue.confirmation) {
      subFormValue.password = loginFormData.get('password');
    } if (subFormValue.password !== subFormValue.confirmation) {
      subFormValue.password = false;
    }
    subFormValue.avatar = loginFormData.get('avatar');
    subFormValue.email = loginFormData.get('email');
    subFormValue.username = loginFormData.get('username');

    console.log(subFormValue);
  };

  const wrongPassword = 'Le mot de passe n\'est pas identique';
  const verifPassword = (event) => {
    if (subFormValue.password === false) {
      return wrongPassword;
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
          }}
        >
          <label className="choose-file">Choisissez une photo de profil
            <input name="avatar" type="file" className="avatar" accept="image/png, image/jpeg" />
          </label>
          <label>Rentrez votre e-mail
            <input name="email" type="mail" className="input-login" placeholder="E-mail" />
          </label>
          <label>Choisissez un pseudo
            <input name="username" type="text" className="input-login" placeholder="Pseudo" />
          </label>
          <label>Rentrez votre mot de passe
            <input name="password" type="password" className="input-login" placeholder="Mot de passe" />
          </label>
          <label>Confirmez votre mot de passe
            <input
              name="confirmation"
              type="password"
              className="input-login validation"
              placeholder="Validation du mot de passe"
            />
          </label>
          <button type="submit" className="submit">Entrer dans le zen</button>
        </form>
      </div>
      <img className="logo" src={logo} alt="Logo O'Calm" />
    </div>
  );
};
export default Subscribe;
