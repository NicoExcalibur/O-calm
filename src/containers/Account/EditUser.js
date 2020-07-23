import { connect } from 'react-redux';

import Account from 'src/components/Account';
import { addUpdate, updateUserProfile } from '../../actions/users';

const mapStateToProps = (state) => ({
  updateValue: state.users.updateValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserProfile: (subArray) => {
    dispatch(updateUserProfile(subArray));
  },
  addUpdate: () => {
    dispatch(addUpdate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
