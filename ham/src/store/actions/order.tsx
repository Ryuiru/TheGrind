import axios from './../../axios-orders';
import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from './actionTypes';
import { ActionType, InitialState } from '../reducers/burgerBuilder';

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
// Async
export const purchaseBurger = (orderData: string) => {
  return (
    dispatch: (arg0: {
      type: string;
      orderId?: string;
      orderData?: string;
      error?: string;
    }) => void
  ) => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
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

export const fetchOrders = () => {
  return (dispatch: ThunkDispatch<InitialState, void, ActionType>) => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err: string) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
