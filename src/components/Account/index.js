import React from 'react';
import PropTypes from 'prop-types';
import { Edit } from 'react-feather';

import avatar from 'src/assets/images/fabio.png';
import './account.scss';

const Account = ({ token, users, setUser, currentUser }) => {
  users.forEach((user) => {
    if (user.name === token.user_nicename) {
      setUser(user);
    }
  });
  return (
    <div className="account">
      <div className="desktop">
        <h2 className="account-name">Bonjour {token.user_nicename} !</h2>
        <div className="avatar-editor">
          <label htmlFor="file">
            <Edit htmlFor="file" className="edit" />
            <input className="avatar-input" name="file" type="file" accept="image/png, image/jpeg" />
          </label>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="edit-info">
        <h1 className="edit-title">Modifier les informations de mon compte</h1>
        <form className="edit-form">
          <input type="mail" className="mail" placeholder="E-mail" value={token.user_email} />
          <input type="text" className="pseudo" placeholder="Pseudo" value={token.user_nicename} />
          <input type="password" className="password" placeholder="Password" />
          <button type="submit" className="submit">Enregistrer</button>
        </form>
        <a href="#" className="delete">Supprimer mon compte</a>
      </div>
    </div>
  );
};
Account.propTypes = {
  users: PropTypes.array.isRequired,
  token: PropTypes.objectOf(
    PropTypes.shape({
      user_email: PropTypes.string.isRequired,
      user_nicename: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setUser: PropTypes.func.isRequired,
  currentUser: PropTypes.array.isRequired,
};

export default Account;
