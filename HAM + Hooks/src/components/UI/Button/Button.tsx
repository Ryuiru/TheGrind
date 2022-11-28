import React, { MouseEventHandler } from 'react';
import classes from './Button.module.css';

export interface PropsButton {
  clicked?: MouseEventHandler | undefined;
  children: React.ReactNode;
  onClick?: MouseEventHandler | undefined;
  btnType: string;
  disabled?: boolean;
}
const button: React.FC<PropsButton> = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default button;

// className={[classes.Button, classes[props.btnType]].join(' ')}
// <Button btnType="Danger">
// <Button btnType="Success">
