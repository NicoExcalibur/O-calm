import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CheckCircle, Trash2 } from 'react-feather';

import './edituser.scss';

const EditUser = ({
  closeEdit,
  updateValue,
  addUpdate,
  updateUserProfile,
}) => {
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

  const comparePassword = () => {
    if (inputValue === secondInputValue) {
      return true;
    }
    if (inputValue !== secondInputValue) {
      return false;
    }
  };

  const subFormValue = {};
  const handleSub = (event) => {
    if (comparePassword() == true || new FormData(event.currentTarget).get('username') > 0) {
      const loginFormData = new FormData(event.currentTarget);
      subFormValue.password = loginFormData.get('password');
      subFormValue.username = loginFormData.get('username');
    }
  };

  return (
    <div className="edit-user">
      <div
        className="close"
        onClick={closeEdit}
      >
        <p>x</p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSub(event);
          addUpdate(subFormValue);
          updateUserProfile();
        }}
      >
        <span className="edit-my-info">Modifier mes informations</span>
        {/* <label htmlFor="avatar" className="choose-file">Changer ma photo de profil
          <input name="avatar" type="file" className="avatar" accept="image/png, image/jpeg" />
        </label> */}
        <label htmlFor="username">Changer mon pseudo
          <input name="username" type="text" className="input-login" placeholder="Pseudo" />
        </label>
        <label htmlFor="password">Changer mon mot de passe
          <input
            name="password"
            type="password"
            className="input-login"
            placeholder="Mot de passe"
            onBlur={(event) => {
              getPassword(event);
            }}
          />
        </label>
        <label htmlFor="confirmation">Confirmez le mot de passe
          <input
            name="confirmation"
            type="password"
            className="input-login validation"
            placeholder="Validation du mot de passe"
            onBlur={(event) => {
              getConfirmation(event);
              comparePassword(event);
            }}
          />
        </label>
        <button type="submit" className="submit">
          <CheckCircle />
        </button>
      </form>
      <button type="button" className="delete-user">
        <Trash2 />
        Supprimer mon compte
      </button>
    </div>
  );
};

EditUser.propTypes = {
  closeEdit: PropTypes.func.isRequired,
  updateUserProfile: PropTypes.func.isRequired,
  addUpdate: PropTypes.func.isRequired,
  updateValue: PropTypes.object.isRequired,
};

export default EditUser;
