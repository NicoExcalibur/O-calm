import {
  SAVE_USERS,
} from 'src/actions/users';

const initialState = {
  users: [],
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    default: return state;
  }
};

export default users;
