import { connect } from 'react-redux';

import MainPage from './MainPage';
import appActions from '../../actions/appActions';

const mapReduxStoreToProps = (store) => {
  return {
    newsList: store.app.get('newsList'),
  };
};

const mapDispatchToProps = dispatch => ({
  changeNewsList: (data) =>
    dispatch(appActions.changeNewsList(data)),
  getNews: () =>
    dispatch(appActions.getNews()),
  logout: () => 
    dispatch(appActions.logout())
});

export default connect(mapReduxStoreToProps, mapDispatchToProps)(MainPage);