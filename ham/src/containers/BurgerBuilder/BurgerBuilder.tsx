import React, { Dispatch } from 'react';
import { connect } from 'react-redux/es/exports';
import Auxiliary from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import { ActionType, InitialState } from '../../store/reducers/burgerBuilder';
import { ThunkDispatch } from 'redux-thunk';
export interface BurgerBuilderState {
  purchasing: boolean;
}
export interface DisabledInfo {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
  [key: string]: boolean;
}
interface BurgerBuilderProps extends RouteComponentProps {
  ings: {
    salad: number;
    cheese: number;
    meat: number;
    bacon: number;
    [key: string]: number;
  };
  onIngredientAdded: (type: keyof Ingredients) => void;
  onIngredientRemoved: (type: keyof Ingredients) => void;
  onInitIngredients: () => void;
  onInitPurchase: () => void;
  price: number;
  error: boolean;
}
export interface Ingredients {
  [key: string]: number;
}
const DISABLED_INFO: DisabledInfo = {
  salad: false,
  bacon: false,
  cheese: false,
  meat: false,
};
class BurgerBuilder extends React.Component<
  BurgerBuilderProps,
  BurgerBuilderState
> {
  state: BurgerBuilderState = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients: { [igKey: string]: number }) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo: DisabledInfo = { ...DISABLED_INFO };
    for (let key in disabledInfo) {
      disabledInfo[key] = this.props.ings[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (Object.keys(this.props.ings).length !== 0) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state: { burgerBuilder: InitialState }) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState, void, ActionType>
) => {
  return {
    onIngredientAdded: (ingName: string) =>
      dispatch(actions.addIngredient(ingName)),

    onIngredientRemoved: (ingName: string) =>
      dispatch(actions.removeIngredient(ingName)),

    onInitIngredients: () => dispatch(actions.initIngredients()),

    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
