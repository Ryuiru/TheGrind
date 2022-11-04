import React, { Component, ButtonHTMLAttributes } from 'react';
import './BuildControl.css';
import {
  Ingredients,
  DisabledInfo,
} from '../../../../containers/BurgerBuilder/BurgerBuilder';

interface Props {
  label: string;
  added: () => void;
  removed: () => void;
  // disabled?: ButtonHTMLAttributes<boolean>;
  disabled?: any;
  // onClick?: typeof BuildControl<T> | undefined;
}
export const BuildControl: React.FC<Props> = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Less' onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className='More' onClick={props.added}>
      More
    </button>
  </div>
);