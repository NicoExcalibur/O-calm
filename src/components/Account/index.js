import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Edit } from 'react-feather';

import avatar from 'src/assets/images/avatar.png';
import './account.scss';
import EditUser from './EditUser';

const Account = ({ token, userProfile }) => {
  const [editBool, setEditBool] = useState(false);

  userProfile();

  const openEdit = () => {
    setEditBool(true);
  };

  const closeEdit = () => {
    setEditBool(false);
  };

  return (
    <div className="account">
      <div className="desktop">
        <h2 className="account-name">
          Bonjour <em className="hey-you">{token.user_nicename}</em> !
        </h2>
        <div className="avatar-editor">

          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="edit-info">

        <h1 className="edit-title">Mes informations</h1>
        <form className="edit-form">
          <h2 className="infos">Adresse e-mail</h2>
          <h3 className="mail">{token.user_email}</h3>
          <h2 className="infos">Pseudo</h2>
          <h3 className="pseudo">
            {token.user_nicename}
          </h3>
        </form>
        <div className="edit-account">
          <a className="edit">
            <Edit
              className="edit"
              size={30}
              onClick={openEdit}
            />
            {editBool && (
              <EditUser closeEdit={closeEdit} />
            )}
          </a>
          <p className="edit-legend">
            modifier mon compte
          </p>
        </div>

      </div>
    </div>
  );
};

Account.propTypes = {
  users: PropTypes.array.isRequired,
  userProfile: PropTypes.func.isRequired,
  token: PropTypes.objectOf(
    PropTypes.shape({
      token: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
      user_nicename: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setUser: PropTypes.func.isRequired,
  currentUser: PropTypes.array.isRequired,
};

export default Account;
