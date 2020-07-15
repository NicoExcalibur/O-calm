import {
  SAVE_USERS,
  SAVE_LOGIN,
  SAVE_TOKEN,
  SET_USER,
} from 'src/actions/users';

const initialState = {
  users: [],
  loginValue: [],
  token: {},
  isLogged: false,
  currentUser: [],
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SAVE_LOGIN:
      return {
        ...state,
        loginValue: action.loginValue,
      };

    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
        isLogged: true,
      };

    case SET_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    default: return state;
  }
};

export default users;
