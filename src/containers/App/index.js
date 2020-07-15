import { connect } from 'react-redux';

import {
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
} from 'src/actions/videos';

import { fetchUsers } from 'src/actions/users';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.users.isLogged,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
