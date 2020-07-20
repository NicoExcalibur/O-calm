/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';

import {
  FETCH_USERS,
  saveUsers,
  VERIF_LOGIN,
  saveToken,
  VERIF_SESSION,
  isLogged,
  SEND_SUBSCRIBE,
  USER_PROFILE,
  SEND_FAVORITES,
  IMPORT_FAVORITES,
  saveFavorites,
} from 'src/actions/users';
import { setErrors } from 'src/actions/errors';

import { setUser } from '../actions/users';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/users?per_page=100')
        .then((response) => {
          store.dispatch(saveUsers(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    case VERIF_LOGIN: {
      const { loginValue } = store.getState().users;
      const username = loginValue.username;
      const password = loginValue.password;
      axios.post(`http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`)
        .then((response) => {
          sessionStorage.setItem('token', response.data.token);
          console.log(sessionStorage);
          store.dispatch(saveToken(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });
      next(action);
      break;
    }

    case VERIF_SESSION: {
      const token = sessionStorage.getItem('token');
      const verifySession = new Promise((resolve, reject) => {
        if (sessionStorage.token) {
          axios({
            method: 'post',
            url: 'http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/jwt-auth/v1/token/validate',
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(resolve)
            .catch(reject);
        }
        else {
          reject();
        }
      });
      verifySession
        .then(isLogged(true))
        .catch(isLogged(false));

      next(action);
      break;
    }

    case SEND_SUBSCRIBE: {
      const { subArray } = store.getState().users;
      axios.post('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/users/register', subArray)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });
      next(action);
      break;
    }

    case USER_PROFILE: {
      const token = sessionStorage.getItem('token');
      const verifySession = new Promise((resolve, reject) => {
        if (sessionStorage.token) {
          axios({
            method: 'post',
            url: 'http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/jwt-auth/v2/users/me',
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(resolve)
            .catch(reject);
        }
        else {
          reject();
        }
      });
      verifySession
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    case SEND_FAVORITES: {
      const token = sessionStorage.getItem('token');
      const sendFav = new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: 'http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/ocalm-settings/v1/video/favorite',
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(resolve)
          .catch(reject);
      });
      sendFav
        .then(resolve)
        .catch(reject);
      next(action);
      break;
    }

    case IMPORT_FAVORITES: {
      const token = sessionStorage.getItem('token');
      const saveFav = new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: 'http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/ocalm-settings/v1/video/favorite',
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(resolve)
          .catch(reject);
      });
      saveFav
        .then((response) => {
          saveFavorites(response.data);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default usersMiddleware;
