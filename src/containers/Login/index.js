import { connect } from 'react-redux';

import Login from 'src/components/Login';
import { saveLogin, verifLogin } from 'src/actions/users';

const mapStateToProps = (state) => ({
  loginValue: state.users.loginValue,
  token: state.users.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (loginValue) => {
    dispatch(saveLogin(loginValue));
  },
  verifLogin: () => {
    dispatch(verifLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
