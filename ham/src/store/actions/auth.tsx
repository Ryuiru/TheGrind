import * as actionTypes from './../actions/actionTypes';
import axios from './../../axios-orders';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from '../reducers/auth';
import { ActionType } from '../reducers/burgerBuilder';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token: string, userId: null | string) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error: string) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expirationTime: number) => {
  return (dispatch: (arg0: { type: string }) => void) => {
    console.log('pretimeout', expirationTime);
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
    console.log('posttimeout', expirationTime);
  };
};

export const auth = (email: string, password: string, isSignUp: boolean) => {
  return (dispatch: ThunkDispatch<InitialState3, void, ActionType>) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDd_u3YSn_gVKDMQRGo0Hr0-M6JktHP4yk';
    if (!isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDd_u3YSn_gVKDMQRGo0Hr0-M6JktHP4yk';
    }
    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        ).toString();
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path: string) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch: ThunkDispatch<InitialState3, void, ActionType>) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate')); //errors: but works

      // const expirationDate = new Date(localStorage.getItem('expirationDate') ? localStorage.getItem('expirationDate') : 0 ); //errors: but works

      // const expirationDate = new Date(localStorage.getItem('expirationDate') ? 'expirationDate' : 0 ); //no errors: doesnt work
      console.log('checkstate', expirationDate);

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
