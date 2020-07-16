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
      // eslint-disable-next-line prefer-destructuring
      console.log(sessionStorage);
      // const stateToken = sessionStorage.token; // store.getState().users.token.token;
      const token = sessionStorage.token;
      // const tokenFunc = () => {
      //   if (stateToken.length > 0) {
      //     token = stateToken;
      //   }
      // };
      // tokenFunc();
      console.log(token);
      // const verifySession = new
      // Promise((resolve, reject) => {
      if (token.length > 0) {
        axios.post('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/jwt-auth/v1/token/validate', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(isLogged(true));
      }
      else {
        isLogged(false);
      }
      // verifySession();
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default usersMiddleware;
