import { connect } from 'react-redux';

import EditUser from 'src/components/Account/EditUser';
import { addUpdate, updateUserProfile } from '../../actions/users';

const mapStateToProps = (state) => ({
  updateValue: state.users.updateValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserProfile: (subArray) => {
    dispatch(updateUserProfile(subArray));
  },
  addUpdate: (updateValue) => {
    dispatch(addUpdate(updateValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
