import axios from 'axios';

import { FETCH_USERS, saveUsers } from 'src/actions/users';

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
    default:
      next(action);
  }
};

export default usersMiddleware;
