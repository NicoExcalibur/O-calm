import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Edit } from 'react-feather';

import EditUser from 'src/containers/Account/EditUser';
import UserAvatar from 'react-user-avatar';
import './account.scss';
import { NavLink } from 'react-router-dom';

const Account = ({ token, currentUser }) => {
  const [editBool, setEditBool] = useState(false);

  const openEdit = () => {
    setEditBool(true);
  };

  const closeEdit = () => {
    setEditBool(false);
  };
  let admin = false;
  const adminBool = () => {
    currentUser.roles.forEach((role) => {
      if (role === 'administrator') {
        admin = true;
      }
    });
  };
  adminBool();
  return (
    <div className="account">
      <div className="desktop">
        <h2 className="account-name">
          Bonjour <em className="hey-you">{token.user_nicename}</em> !
        </h2>
        {admin && (
          <NavLink
            to="/"
            className="back"
          >
            Back Office
          </NavLink>
        )}
        <div className="avatar-editor">
          <UserAvatar className="avatar" name={currentUser.name} src={currentUser.avatar_urls[96]} size="10rem" />
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
  token: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Account;
