import React from 'react';

import logo from 'src/assets/images/logo.png';
import './subscribe.scss';

const Subscribe = () => {
  const subFormValue = {};
  const handleSub = (event) => {
    const loginFormData = new FormData(event.currentTarget);
    // subFormValue.confirmation = loginFormData.get('confirmation');
    subFormValue.password = loginFormData.get('password');
    subFormValue.avatar = loginFormData.get('avatar');
    subFormValue.email = loginFormData.get('email');
    subFormValue.username = loginFormData.get('username');
  };

  // let wrongPassword;

  // const verifPassword = () => {
  //   // eslint-disable-next-line prefer-destructuring
  //   const password = subFormValue.password;
  //   // eslint-disable-next-line prefer-destructuring
  //   const confirmation = subFormValue.confirmation;
  //   if (password !== confirmation) {
  //     wrongPassword = 'Le mot de passe n\'est pas identique';
  //     return wrongPassword;
  //   }
  //   if (password === confirmation) {
  //     return true;
  //   }
  // };

  const getPassword = () => {
    
  };

  return (
    <div className="subscribe">
      <div className="left-subscribe">
        <h1>créez votre petit coin o'calm !</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSub(event);
            // const check = verifPassword();
            // console.log(check);
          }}
        >
          <label htmlFor="avatar" className="choose-file">Choisissez une photo de profil
            <input name="avatar" type="file" className="avatar" accept="image/png, image/jpeg" />
          </label>
          <label htmlFor="email">Rentrez votre e-mail *
            <input name="email" type="mail" className="input-login" placeholder="E-mail" required />
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
              pattern={input.password.value}
            />
          </label>
          <div className="wrong-pass"></div>
          <div className="required">* veuillez impérativement remplir ces champs</div>
          <button type="submit" className="submit">Entrer dans le zen</button>
        </form>
      </div>
      <img className="logo" src={logo} alt="Logo O'Calm" />
    </div>
  );
};
export default Subscribe;
