import React from 'react';
import { Edit } from 'react-feather';

import avatar from 'src/assets/avatar.png';
import './account.scss';

const Account = () => (
  <div className="account">
    <div className="desktop">
      <h2 className="account-name">Bonjour Michemiche !</h2>
      <div className="avatar-editor">
        <Edit className="edit" />
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </div>
    <div className="edit-info">
      <h1 className="edit-title">Modifier les informations de mon compte</h1>
      <form className="edit-form">
        <input type="mail" className="mail" placeholder="maildugars" />
        <input type="text" className="pseudo" placeholder="pseudodugars" />
        <input type="password" className="password" placeholder="desétoilescarcestunpsswrd" />
        <button type="submit" className="submit">Enregistrer</button>
      </form>
      <a href="#" className="delete">Supprimer mon compte</a>
    </div>
  </div>
);


export default Account;
