export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const VERIF_LOGIN = 'VERIF_LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const IS_LOGGED = 'IS_LOGGED';
export const SET_USER = 'SET_USER';
export const VERIF_SESSION = 'VERIF_SESSION';
export const NOT_LOGGED = 'NOT_LOGGED';
export const INSERT_SUBSCRIBE = 'INSERT_SUBSCRIBE';
export const SEND_SUBSCRIBE = 'SEND_SUBSCRIBE';
export const USER_PROFILE = 'USER_PROFILE';
export const SEND_FAVORITES = 'SEND_FAVORITES';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const IMPORT_FAVORITES = 'IMPORT_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const ADD_UPDATE = 'ADD_UPDATE';

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

export const setUser = (currentUser) => ({
  type: SET_USER,
  currentUser,
});

export const verifSession = () => ({
  type: VERIF_SESSION,
});

export const insertSubscribe = (subArray) => ({
  type: INSERT_SUBSCRIBE,
  subArray,
});

export const sendSubscribe = () => ({
  type: SEND_SUBSCRIBE,
});

export const userProfile = () => ({
  type: USER_PROFILE,
});

export const sendFavorites = () => ({
  type: SEND_FAVORITES,
});

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  favorites,
});

export const importFavorites = () => ({
  type: IMPORT_FAVORITES,
});

export const addFavorite = (addFav) => ({
  type: ADD_FAVORITE,
  addFav,
});

export const deleteFavorite = () => ({
  type: DELETE_FAVORITE,
});

export const updateUserProfile = () => ({
  type: UPDATE_USER_PROFILE,
});

export const addUpdate = (updateValue) => ({
  type: ADD_UPDATE,
  updateValue,
});
