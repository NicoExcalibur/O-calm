import React from 'react';
import { Edit } from 'react-feather';

import avatar from 'src/assets/avatar.png';
import './account.scss';

const Account = () => (
  <div className="account">
    <h1 className="account-title">Coucou MicheMiche</h1>
    <div className="avatar-editor">
      <Edit className="edit" />
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
    <form className="edit-info">
      <input type="mail" className="mail" placeholder="maildugars" />
      <input type="text" className="pseudo" placeholder="pseudodugars" />
      <input type="password" className="password" placeholder="desétoilescarcestunpsswrd" />
      <button type="submit" className="submit">Modifier mes infos</button>
    </form>
  </div>
);

export default Account;
