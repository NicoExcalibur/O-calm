export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const VERIF_LOGIN = 'VERIF_LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const IS_LOGGED = 'IS_LOGGED';
export const SET_USER = 'SET_USER';
export const VERIF_SESSION = 'VERIF_SESSION';
export const NOT_LOGGED = 'NOT_LOGGED';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});

export const saveLogin = (loginValue) => ({
  type: SAVE_LOGIN,
  loginValue,
});

export const verifLogin = () => ({
  type: VERIF_LOGIN,
});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});

export const isLogged = (value) => ({
  type: IS_LOGGED,
  isLogged: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  currentUser: user,
});

export const verifSession = () => ({
  type: VERIF_SESSION,
});
