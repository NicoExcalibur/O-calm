import { connect } from 'react-redux';

import { userProfile } from 'src/actions/users';

import Menu from 'src/components/Header/Menu';

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  userProfile: () => {
    dispatch(userProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
