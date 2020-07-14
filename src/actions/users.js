export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const VERIF_LOGIN = 'VERIF_LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';

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
