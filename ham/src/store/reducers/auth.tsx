import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { ActionType } from './burgerBuilder';

export interface InitialState3 {
  token: null;
  userId: null;
  error: null;
  loading: boolean;
  authRedirectPath: string;
}

const initialState: InitialState3 = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const authStart = (state: InitialState3, action: ActionType) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state: InitialState3, action: ActionType) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state: InitialState3, action: ActionType) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state: InitialState3, action: ActionType) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state: InitialState3, action: ActionType) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
