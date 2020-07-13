import React from 'react';
import { Edit } from 'react-feather';

import avatar from './fabio.jpg';
import './account.scss';

const Account = () => (
  <div className="account">
    <div className="desktop">
      <h2 className="account-name">Bonjour Fabio !</h2>
      <div className="avatar-editor">
        <Edit className="edit" />
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </div>
    <div className="edit-info">
      <h1 className="edit-title">Modifier les informations de mon compte</h1>
      <form className="edit-form">
        <input type="mail" className="mail" placeholder="E-mail" value="fabiolabaguette@oclock.io" />
        <input type="text" className="pseudo" placeholder="Pseudo" value="Fabio" />
        <input type="password" className="password" placeholder="Password" value="lalala" />
        <button type="submit" className="submit">Enregistrer</button>
      </form>
      <a href="#" className="delete">Supprimer mon compte</a>
    </div>
  </div>
);

export default Account;
