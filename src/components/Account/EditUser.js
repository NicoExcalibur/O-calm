import React from 'react';
import PropTypes from 'prop-types';

import './edituser.scss';

const EditUser = ({ closeEdit }) => (
  <div className="edit-user">
    <div
      className="close"
      onClick={closeEdit}
    >
      <p>x</p>
    </div>
    <form>
      <span className="edit-my-info">Modifier mes informations</span>
      <label className="choose-file">Changer ma photo de profil
        <input type="file" className="avatar" accept="image/png, image/jpeg" />
      </label>
      <label>Changer mon pseudo
        <input type="text" className="input-login" placeholder="Pseudo" />
      </label>
      <label>Changer mon mot de passe
        <input type="password" className="input-login" placeholder="Mot de passe" />
      </label>
      <label>Confirmez le mot de passe
        <input type="password" className="input-login validation" placeholder="Validation du mot de passe" />
      </label>
      <button type="submit" className="submit">valider</button>
    </form>
  </div>
);

EditUser.propTypes = {
  closeEdit: PropTypes.func.isRequired,
  
};

export default EditUser;
