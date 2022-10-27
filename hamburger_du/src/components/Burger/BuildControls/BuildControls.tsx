import React from 'react';
import './BuildControls.css';
import { BuildControl } from './BuildControl/BuildControl';
import {
  Ingredients,
  BurgerBuilderState,
} from '../../../containers/BurgerBuilder/BurgerBuilder';

interface Props {
  ingredientAdded: (type: keyof Ingredients) => void;
  ingredientRemoved: (type: keyof Ingredients) => void;
  price: number;
  disabled: any;
  purchasable: boolean;
}

export const controls = [
  { label: 'Salad,', type: 'salad' },
  { label: 'Bacon,', type: 'bacon' },
  { label: 'Cheese,', type: 'cheese' },
  { label: 'Meat,', type: 'meat' },
];
export const BuildControls: React.FC<Props> = (props) => (
  <div className='BuildControls'>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type as keyof Ingredients)}
        removed={() => props.ingredientRemoved(ctrl.type as keyof Ingredients)}
        disabled={props.disabled}
      />
    ))}
    <button className='OrderButton' disabled={props.purchasable}>
      ORDER NOW!
    </button>
  </div>
);
