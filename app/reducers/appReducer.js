import { Map } from 'immutable';

import constant from '../constants/appConstants';

const initialState = Map({
  currentScreen: 'initialScreen',
  errorMessage: '',
  newsList: []
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.CHANGE_CURRENT_SCREEN:
      return state
        .set('currentScreen', action.currentScreen);
    case constant.CHANGE_ERROR_MESSAGE:
      return state
        .set('errorMessage', action.payload);
    case constant.GET_NEWS:
      return state
        .set('newsList', action.payload)
    default:
      return state;
  }
}