import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux/es/exports';
import Auxiliary from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import { ActionType, InitialState } from '../../store/reducers/burgerBuilder';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from '../../store/reducers/auth';
import { InitialState2 } from '../../store/reducers/order';
export interface DisabledInfo {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
  [key: string]: boolean;
}
interface BurgerBuilderProps extends RouteComponentProps {
  ings: void;
  onIngredientAdded: (type: keyof Ingredients) => void;
  onIngredientRemoved: (type: keyof Ingredients) => void;
  onInitIngredients: () => void;
  onInitPurchase: () => void;
  // price: any;
  error: boolean;
  isAuthenticated: boolean;
  onSetAuthRedirectPath: (path: string) => void;
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
const BurgerBuilder = (props: BurgerBuilderProps) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();
  const ings = useSelector(
    (state: { burgerBuilder: { ingredients: {} } }) =>
      state.burgerBuilder.ingredients
  );
  const price = useSelector(
    (state: { burgerBuilder: { totalPrice: number } }) =>
      state.burgerBuilder.totalPrice
  );
  const error = useSelector(
    (state: { burgerBuilder: { error: {} } }) => state.burgerBuilder.error
  );
  const isAuthenticated = useSelector(
    (state: { auth: { token: {} } }) => state.auth.token !== null
  );

  const onIngredientAdded = (ingName: string) =>
    dispatch(actions.addIngredient(ingName));

  const onIngredientRemoved = (ingName: string) =>
    dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path: string) =>
    dispatch(actions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients: { [igKey: string]: number }) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push('/checkout');
  };

  const disabledInfo: DisabledInfo = { ...DISABLED_INFO };
  for (let key in disabledInfo) {
    disabledInfo[key] = ings[key as keyof typeof ings] <= 0;
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
  if (Object.keys(ings).length !== 0) {
    burger = (
      <Auxiliary>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
          price={price}
        />
      </Auxiliary>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        price={price}
      />
    );
  }

  return (
    <Auxiliary>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Auxiliary>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
