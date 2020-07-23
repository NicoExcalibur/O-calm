import { connect } from 'react-redux';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  token: state.users.token,
  users: state.users.users,
  currentUser: state.users.currentUser,
  updateValue: state.users.updateValue,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
