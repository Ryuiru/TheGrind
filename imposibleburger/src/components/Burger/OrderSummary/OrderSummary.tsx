import React, { Component, MouseEventHandler } from 'react';
import { Ingredients } from '../../../containers/BurgerBuilder/BurgerBuilder';
import Auxiliary from '../../../HOC/Auxiliary';
import Button, { PropsButton } from '../../UI/Button/Button';
// import './../../UI/Button/Button.css';
interface Props {
  ingredients: {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [Key: string]: number;
  };
  price: number;
  purchaseCancelled: MouseEventHandler | undefined;
  purchaseContinued: MouseEventHandler | undefined;
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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
};
export default OrderSummary;
