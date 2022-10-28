import React, { Component } from 'react';
import Auxiliary from '../../HOC/Auxiliary';
import { Burger } from '../../components/Burger/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import { Modal } from '../../components/UI/Modal/Modal';
import { OrderSummary } from '../../components/Burger/OrderSummary/OrderSummary';
export interface Ingredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}
export interface BurgerBuilderState {
  ingredients: Ingredients;
  totalPrice?: number;
  purchasable?: boolean;
  purchasing?: boolean;
  // purchaseCancelHandler?: boolean;
  // purchaseContinueHandler?: string;
  // purchaseCancelled?: boolean;
  // purchaseContinued?: string;
}
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
export interface DisabledInfo {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
  [key: string]: boolean;
}
const DISABLED_INFO: DisabledInfo = {
  salad: false,
  bacon: false,
  cheese: false,
  meat: false,
};
export class BurgerBuilder extends React.Component<{}, BurgerBuilderState> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };
  updatePurchaseState(ingredients: { [x: string]: number }) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredientHandler = (type: keyof Ingredients) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(ingredients); // UPDATE THE STATE FOR INGREDIENTS
  };
  removeIngredientHandler = (type: keyof Ingredients) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(ingredients); // UPDATE THE STATE FOR INGREDIENTS
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true }); //DOES NOT WORK
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert('you continue');
  };
  render() {
    const disabledInfo: DisabledInfo = { ...DISABLED_INFO };
    for (let key in disabledInfo) {
      disabledInfo[key as keyof Ingredients] =
        this.state.ingredients[key as keyof Ingredients] <= 0;
    }
    console.log(disabledInfo);
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable} // add ! cuz u need it and fix
          ordered={this.purchaseHandler}
        />
      </Auxiliary>
    );
  }
}
