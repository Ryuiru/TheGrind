import React, { MouseEventHandler } from 'react';
import { Ingredients } from '../../../containers/BurgerBuilder/BurgerBuilder';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

interface PropsCS {
  checkoutCancelled: MouseEventHandler<Element> | undefined;
  checkoutContinued: MouseEventHandler<Element> | undefined;
  ingredients: Ingredients;
  // ordered: MouseEventHandler | undefined;
}

const CheckoutSummary: React.FunctionComponent<PropsCS> = (props) => {
  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  );
};

export default CheckoutSummary;
