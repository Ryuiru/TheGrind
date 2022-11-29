import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { RouteComponentProps } from 'react-router';
import { InitialState } from '../../store/reducers/burgerBuilder';
import { InitialState2 } from '../../store/reducers/order';

interface CheckoutProps extends RouteComponentProps {
  ings: {};
  onInitPurchase?: () => void;
  purchased: boolean;
  menuOpened?: boolean;
}

export interface CheckoutState {
  ingredients: Ingredients;
  price: string | number;
  totalPrice: number | string;
}

interface Ingredients {
  [key: string]: number;
}

const checkout: React.FunctionComponent<CheckoutProps> = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summary = <Redirect to='/' />;
  if (Object.keys(props.ings).length !== 0) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};
const mapStateToProps = (state: {
  burgerBuilder: InitialState;
  order: InitialState2;
}) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(checkout);
