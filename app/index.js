import React from 'react';
import { Provider } from 'react-redux';
import { Actions, Scene, Router } from 'react-native-router-flux';

import store from './store';

import Login from './components/Login/LoginContainer';
import MainPage from './components/MainPage/MainPageContainer';

const RouterWithRedux = (Router);

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="Login" component={Login} hideNavBar initial />
    <Scene key="MainPage" component={MainPage} hideNavBar />
  </Scene>);

const ReactNativeNews = () =>
  (<Provider store={store}>
    <RouterWithRedux scenes={scenes} />
  </Provider>);

export default ReactNativeNews;