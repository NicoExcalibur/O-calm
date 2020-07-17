import { connect } from 'react-redux';

import Subscribe from 'src/components/Subscribe';
import { insertSubscribe, sendSubscribe } from 'src/actions/users';

const mapStateToProps = (state) => ({
  subArray: state.users.subArray,
});

const mapDispatchToProps = (dispatch) => ({
  insertSubscribe: (subArray) => {
    dispatch(insertSubscribe(subArray));
  },
  sendSubscribe: () => {
    dispatch(sendSubscribe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
