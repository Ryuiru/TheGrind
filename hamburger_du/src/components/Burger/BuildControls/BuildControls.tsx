import React from 'react';
import './BuildControls.css';
import { BuildControl } from './BuildControl/BuildControl';

export const controls = [
  { label: 'Salad,', type: 'salad' },
  { label: 'Bacon,', type: 'bacon' },
  { label: 'Cheese,', type: 'cheese' },
  { label: 'Meat,', type: 'meat' },
];
// type Props {
//   props: string
// }
export const BuildControls = () => (
  <div className='BuildControls'>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={(props: any) => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);
