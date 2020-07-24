import { connect } from 'react-redux';

import {
  setUser,
  importFavorites,
  userProfile,
} from 'src/actions/users';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
  users: state.users.users,
  token: state.users.token,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUser(user));
  },
  importFavorites: () => {
    dispatch(importFavorites());
  },
  userProfile: () => {
    dispatch(userProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
