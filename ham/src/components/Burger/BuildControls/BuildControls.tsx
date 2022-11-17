import React, { MouseEventHandler } from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import { Ingredients } from '../../../../src/containers/BurgerBuilder/BurgerBuilder';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];
interface Disabled {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
  [key: string]: boolean;
}
interface BuildControlProps {
  ingredientAdded: (type: keyof Ingredients) => void;
  ingredientRemoved: (type: keyof Ingredients) => void;
  price: number;
  disabled: Disabled;
  purchasable: boolean;
  ordered: MouseEventHandler | undefined;
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
        added={() => props.ingredientAdded(ctrl.type as keyof Ingredients)}
        removed={() => props.ingredientRemoved(ctrl.type as keyof Ingredients)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className='OrderButton'
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW!
    </button>
  </div>
);

export default BuildControls;
