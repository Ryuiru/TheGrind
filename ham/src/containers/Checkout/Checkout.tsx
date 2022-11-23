import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from './../../store/actions/index';
import { RouteComponentProps } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType, InitialState } from '../../store/reducers/burgerBuilder';
import { InitialState2 } from '../../store/reducers/order';
type CheckoutProps = {
  ings: {};
  onInitPurchase: () => void;
  purchased: boolean;
  menuOpened: boolean;
} & RouteComponentProps;
export interface CheckoutState {
  ingredients: Ingredients;
  price: string | number;
  totalPrice: number | string;
}

interface Ingredients {
  [key: string]: number;
}

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    // console.log(this.state.totalPrice);
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    let summary = <Redirect to='/' />;
    if (Object.keys(this.props.ings).length !== 0) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to='/' />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = (state: {
  burgerBuilder: InitialState;
  order: InitialState2;
}) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
