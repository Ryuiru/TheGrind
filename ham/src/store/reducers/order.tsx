import * as actionTypes from './../actions/actionTypes';
import { updateObject } from '../utility';
import { setIngredients } from '../actions/burgerBuilder';
export interface InitialState2 {
  orders: [];
  loading: boolean;
  purchased: boolean;
}

interface ActionType {
  orderData: [];
  orderId: string;
  type: string;
  ingredientName?: string;
  orders: string;
}

const initialState: InitialState2 = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchareInit = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { purchased: false });
};

const purchareBurgerStart = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { loading: true });
};

const purchareBurgerSuccess = (state: InitialState2, action: ActionType) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder as []),
  });
};

const purchareBurgerFail = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { loading: false });
};

const fetchingOrdersStart = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { loading: true });
};

const fetchingOrdersSuccess = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchingOrdersFail = (state: InitialState2, action: ActionType) => {
  return updateObject(state, { loading: false });
};
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchareInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchareBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchareBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchareBurgerFail(state, action);
    case actionTypes.FETCHING_ORDERS_START:
      return fetchingOrdersStart(state, action);
    case actionTypes.FETCHING_ORDERS_SUCCESS:
      return fetchingOrdersSuccess(state, action);
    case actionTypes.FETCHING_ORDERS_FAIL:
      return fetchingOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
