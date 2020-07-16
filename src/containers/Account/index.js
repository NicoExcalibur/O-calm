import { connect } from 'react-redux';

import { setUser } from 'src/actions/users';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  token: state.users.token,
  users: state.users.users,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
