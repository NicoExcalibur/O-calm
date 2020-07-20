import { connect } from 'react-redux';

import {
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
} from 'src/actions/videos';

import { fetchUsers, verifSession, importFavorites } from 'src/actions/users';

import { getErrors } from 'src/actions/errors';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.users.isLogged,
  users: state.users.users,
  token: state.users.token,
  errors: state.errors.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => {
    dispatch(fetchVideos());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchAuthors: () => {
    dispatch(fetchAuthors());
  },
  fetchDurations: () => {
    dispatch(fetchDurations());
  },
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
  verifSession: () => {
    dispatch(verifSession());
  },
  importFavorites: () => {
    dispatch(importFavorites());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
