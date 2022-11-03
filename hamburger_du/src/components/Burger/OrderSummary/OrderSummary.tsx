import React, { Component } from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import {
  Ingredients,
  BurgerBuilderState,
} from '../../../containers/BurgerBuilder/BurgerBuilder';
import { Button } from '../../UI/Button/Button';

export interface Props {
  purchaseCancelled: boolean;
  purchaseContinued: string;
  price: number;
  ingredients: (type: keyof Ingredients) => void;
}
export const OrderSummary: React.FC<Props> = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey as keyof Ingredients}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
};
