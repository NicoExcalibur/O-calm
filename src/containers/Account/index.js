import { connect } from 'react-redux';

import { userProfile } from 'src/actions/users';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  token: state.users.token,
  users: state.users.users,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  userProfile: () => {
    dispatch(userProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
