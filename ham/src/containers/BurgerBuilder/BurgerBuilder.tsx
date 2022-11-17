import React from 'react';
import { connect } from 'react-redux/es/exports';
import Auxiliary from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router-dom';
import * as actionTypes from '../../store/actions';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import { ActionType, InitialState } from '../../store/reducer';
export interface BurgerBuilderState {
  purchasing: boolean;
  loading: boolean;
  error: boolean;
}
export interface DisabledInfo {
  salad: boolean | number;
  bacon: boolean | number;
  cheese: boolean | number;
  meat: boolean | number;
  [key: string]: boolean | number;
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
  price: number;
}
export interface Ingredients {
  [key: string]: number;
}
// const DISABLED_INFO: DisabledInfo = {
//   salad: false,
//   bacon: false,
//   cheese: false,
//   meat: false,
// };
// export interface INGREDIENT_PRICES {
//   salad: number;
//   cheese: number;
//   meat: number;
//   bacon: number;
//   [key: string]: number;
// }
class BurgerBuilder extends React.Component<
  BurgerBuilderProps,
  BurgerBuilderState
> {
  state: BurgerBuilderState = {
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://react-burger-2caa5-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
    //   )
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
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
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo: DisabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
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
    if (this.state.loading) {
      orderSummary = <Spinner />;
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
const mapStateToProps = (state: InitialState) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName: string) =>
      dispatch({
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName,
      }),
    onIngredientRemoved: (ingName: string) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
