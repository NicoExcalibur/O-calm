import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Edit } from 'react-feather';
import { useMediaQuery } from '@material-ui/core';

import EditUser from 'src/containers/Account/EditUser';
import UserAvatar from 'react-user-avatar';
import './account.scss';
import { Route, NavLink, Switch } from 'react-router-dom';

const Account = ({ token, currentUser, updateValue }) => {
  const [editBool, setEditBool] = useState(false);
  const editMobile = useMediaQuery('(max-width:600px)');

  console.log(currentUser);

  const openEdit = () => {
    setEditBool(true);
  };

  const closeEdit = () => {
    setEditBool(false);
  };
  let admin = false;
  const adminBool = () => {
    currentUser.roles.forEach((role) => {
      if (role == 'administrator') {
        admin = true;
      }
    })
  };
  adminBool();

  let boolEdit = false;
  
  const editResp = () => { 
    if (editMobile === true) {
      boolEdit = true;
    }
  };
  editResp();

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
            {/* {boolEdit && (
              <Route
                path="/edit"
                exact
              >
                <EditUser />
              </Route>
              <NavLink
                to="/edit"
              >
                <Edit
                  className="edit"
                  size={30}
                />
              </NavLink>
            );
            {!boolEdit && (
              <Edit
                className="edit"
                size={30}
                onClick={openEdit}
              />
              {editBool && (
                <EditUser closeEdit={closeEdit} />
              )}
            )} */}
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
  token: PropTypes.objectOf(
    PropTypes.shape({
      user_email: PropTypes.string.isRequired,
      user_nicename: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentUser: PropTypes.object.isRequired,
  updateValue: PropTypes.object.isRequired,
};

export default Account;
