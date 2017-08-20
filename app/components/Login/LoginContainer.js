import { connect } from 'react-redux';

import Login from './Login';
import appActions from '../../actions/appActions';

const mapReduxStoreToProps = (store) => {
  return {
    errorMessage: store.app.get('errorMessage'),
  };
};

const mapDispatchToProps = dispatch => ({
  changeErrorMessage: (message) =>
    dispatch(appActions.changeErrorMessage(message)),
  signIn: (userData) =>
    dispatch(appActions.signIn(userData))  
});

export default connect(mapReduxStoreToProps, mapDispatchToProps)(Login);