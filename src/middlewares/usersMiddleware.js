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
} from 'src/actions/users';
// http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/jwt-auth/v1/token?username=ocalm&password=ocalm

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/users?per_page=100')
        .then((response) => {
          store.dispatch(saveUsers(response.data));
        })
        .then((error) => {
          console.warn(error);
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
        });
      next(action);
      break;
    }

    case VERIF_SESSION: {
      // console.log(sessionStorage);
      const token = sessionStorage.getItem('token');
      console.log(token);
      const verifySession = new Promise((resolve, reject) => {
        setTimeout(300);
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

    default:
      next(action);
  }
};

export default usersMiddleware;
