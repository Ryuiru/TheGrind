import React, { MouseEventHandler } from 'react';
import './Button.css';

export interface PropsButton {
  clicked?: MouseEventHandler | undefined;
  children: React.ReactNode;
  onClick?: MouseEventHandler | undefined;
}
const button: React.FC<PropsButton> = (props) => (
  <button className='Button' onClick={props.clicked}>
    {props.children}
  </button>
);
export default button;

// className={[classes.Button, classes[props.btnType]].join(' ')}
// <Button btnType="Danger">
// <Button btnType="Success">
