import React from 'react';
import './Button.css';
import { Props } from '../../Burger/OrderSummary/OrderSummary';
import { string } from 'prop-types';

interface Props {
  children: any;
  clicked: any;
}
export const Button: React.FC<Props> = (props) => (
  <button
    className='Button' //classes[props.btnType].join(' ')  22. Video at the end
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
