import { Actions, ActionConst } from 'react-native-router-flux';
import { Alert } from 'react-native';
import axios from "axios";

import { validation } from '../utils/validation';
import appConstants from '../constants/appConstants';
import apiKeyConstants from '../constants/apiKey';

const changeCurrentScreen = (route, reset) => {
  if (reset) {
    Actions[route]({ type: ActionConst.RESET });
  }
  Actions[route]();
  return {
    type: appConstants.CHANGE_CURRENT_SCREEN,
    currentScreen: route,
  };
};

const changeErrorMessage = (payload) => {
    return {
        type: appConstants.CHANGE_ERROR_MESSAGE,
        payload
    }
}

const changeNewsList = (payload) => {
    return {
        type: appConstants.GET_NEWS,
        payload
    }
}

const signIn = (userData) => {
    return function(dispatch) {
        if (validation(userData)) {
            dispatch(changeCurrentScreen('MainPage', false));
        } else {
            dispatch(changeErrorMessage("Login or password entered incorrectly"));
        }
    }
}

const getNews = () => {
    return function(dispatch) {
        axios.get(apiKeyConstants.BASE_URL + '&apiKey=' + apiKeyConstants.API_KEY,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            dispatch(changeNewsList(res.data.articles));            
        })
        .catch((err) => {
            Alert.alert("Error", "Access error API", [{text: 'OK'}]);
        });
    };
}

const logout = () => {
    return function(dispatch) {
        dispatch(changeCurrentScreen('Login', false));
    }
}

export default {
  changeErrorMessage,
  changeNewsList,
  signIn,
  getNews,
  logout
};