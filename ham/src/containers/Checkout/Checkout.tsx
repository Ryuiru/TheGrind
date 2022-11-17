import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { RouteComponentProps } from 'react-router-dom';
import { InitialState } from '../../store/reducer';
interface CheckoutProps extends RouteComponentProps {
  ings: {};
}
export interface CheckoutState {
  ingredients: Ingredients;
  price: string | number;
  totalPrice: number | string;
}

interface Ingredients {
  // salad?: number;
  // cheese?: number;
  // bacon?: number;
  // meat?: number;
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
    return (
      <div>
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
}
const mapStateToProps = (state: InitialState) => {
  return {
    ings: state.ingredients,
  };
};
export default connect(mapStateToProps, null)(Checkout);
