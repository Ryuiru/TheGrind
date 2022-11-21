import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import { ThunkDispatch } from 'redux-thunk';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ActionType, InitialState } from '../../store/reducers/burgerBuilder';
import { InitialState2 } from '../../store/reducers/order';

// interface OrdersState {
//   orders: string[] | number[];
//   loading: boolean;
// }
interface OrdersProps extends InitialState2 {
  onFetchOrders: () => void;
}
class Orders extends React.Component<OrdersProps> {
  // state = {
  //   orders: [],
  //   loading: true,
  // };
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let orders: JSX.Element | JSX.Element[] = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order['id']}
          ingredients={order['ingredients']}
          price={order['price']}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state: { order: InitialState2 }) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState, void, ActionType>
) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));

// interface OrdersState {
//   orders: string[] | number[];
//   loading: boolean;
// }
// class Orders extends React.Component<{}, OrdersState> {
//   state = {
//     orders: [],
//     loading: true,
//   };
//   render() {
//     return (
//       <div>
//         {this.state.orders.map((order) => (
//           <Order
//             key={order['id']}
//             ingredients={order['ingredients']}
//             price={order['price']}
//           />
//         ))}
//       </div>
