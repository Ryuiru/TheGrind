import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import { ThunkDispatch } from 'redux-thunk';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ActionType } from '../../store/reducers/burgerBuilder';
import { InitialState2 } from '../../store/reducers/order';
import { InitialState3 } from '../../store/reducers/auth';
import { type } from 'os';

type OrdersProps = {
  onFetchOrders: (token: string, userId: string) => void;
  token: string;
  userId: string;
} & InitialState2;

const Orders: React.FC<OrdersProps> = (props) => {
  const { onFetchOrders } = props;

  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, [onFetchOrders]);

  let orders: JSX.Element | JSX.Element[] = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order
        key={order['id']}
        ingredients={order['ingredients']}
        price={order['price']}
      />
    ));
  }
  return <div>{orders}</div>;
};

const mapStateToProps = (state: {
  order: InitialState2;
  auth: InitialState3;
}) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState2, void, ActionType>
) => {
  return {
    onFetchOrders: (token: string, userId: string) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
