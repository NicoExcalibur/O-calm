import { connect } from 'react-redux';

import { userProfile } from 'src/actions/users';

import ButtonMenu from 'src/components/Header/ButtonMenu';

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  userProfile: () => {
    dispatch(userProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMenu);
