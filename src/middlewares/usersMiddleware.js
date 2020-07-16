/* eslint-disable prefer-destructuring */
import axios from 'axios';

import {
  FETCH_USERS,
  saveUsers,
  VERIF_LOGIN,
  saveToken,
} from 'src/actions/users';
// http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm//wp-json/jwt-auth/v1/

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
          console.log(response.data);
          sessionStorage.setItem('token', response.data.token);
          store.dispatch(saveToken(response.data));
        })
        .then((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default usersMiddleware;
