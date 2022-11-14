// import { queries } from '@testing-library/react';
import React from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { RouteComponentProps } from 'react-router-dom';
interface CheckoutProps extends RouteComponentProps {}
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
  state: CheckoutState = {
    ingredients: {},
    price: 0,
    totalPrice: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients: Ingredients = {};
    let price: number | string = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
        // console.log(price);
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }
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
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
