import React, { Component } from 'react';
import { Ingredients } from '../../../../containers/BurgerBuilder/BurgerBuilder';
import Auxiliary from '../../../../HOC/Auxiliary';

interface Props {
  ingredients: {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [Key: string]: number;
  };
}

const OrderSummary: React.FC<Props> = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
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
    </Auxiliary>
  );
};
export default OrderSummary;
