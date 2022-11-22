import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { ActionType } from './burgerBuilder';

interface InitialState3 {
  token: null;
  userId: null;
  error: null;
  loading: boolean;
}

const initialState: InitialState3 = {
  token: null,
  userId: null,
  error: null,
  loading: false,
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

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
