import { connect } from 'react-redux';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  token: state.users.token,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
