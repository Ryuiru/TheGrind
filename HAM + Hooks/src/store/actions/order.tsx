import axios from './../../axios-orders';
import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from './actionTypes';
import { ActionType } from '../reducers/burgerBuilder';
import { InitialState2 } from '../reducers/order';

export const purchaseBurgerSuccess = (id: string, orderData: string) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error: string) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};
export const purchaseBurger = (orderData: string, token: string) => {
  return (dispatch: ThunkDispatch<InitialState2, void, ActionType>) => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json?auth=' + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders: {}) => {
  return {
    type: actionTypes.FETCHING_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrdersFail = (error: string) => {
  return {
    type: actionTypes.FETCHING_ORDERS_FAIL,
    error: error,
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCHING_ORDERS_START,
  };
};

export const fetchOrders = (token: string, userId: string) => {
  return (dispatch: ThunkDispatch<InitialState2, void, ActionType>) => {
    dispatch(fetchOrdersStart());
    const queryParams =
      '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get('/orders.json' + queryParams)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
