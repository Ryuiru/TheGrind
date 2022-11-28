import React, { MouseEventHandler } from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import {
  DisabledInfo,
  Ingredients,
} from '../../../../src/containers/BurgerBuilder/BurgerBuilder';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

interface BuildControlProps {
  ingredientAdded: (ingName: string) => {
    type: string;
    ingredientName: string;
  };
  ingredientRemoved: (ingName: string) => {
    type: string;
    ingredientName: string;
  };
  price: number;
  disabled: DisabledInfo;
  purchasable: boolean;
  ordered: MouseEventHandler | undefined;
  isAuth: boolean;
}
const BuildControls: React.FC<BuildControlProps> = (props) => (
  <div className='BuildControls'>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className='OrderButton'
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? 'ORDER NOW!' : 'Please Sign Up for Ham'}
    </button>
  </div>
);

export default BuildControls;
