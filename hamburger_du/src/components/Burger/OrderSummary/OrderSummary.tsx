import React, { Component } from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import {
  Ingredients,
  BurgerBuilderState,
} from '../../../containers/BurgerBuilder/BurgerBuilder';
import { Button } from '../../UI/Button/Button';

export const OrderSummary: React.FC<BurgerBuilderState> = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey as keyof Ingredients}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>CaNcEL</Button>
      <Button clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
};
