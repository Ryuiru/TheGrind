import React, { ChangeEventHandler, ReactNode } from 'react';
import { AuthProps } from '../../../containers/Auth/Auth';
import { ContactDataProps } from '../../../containers/Checkout/ContactData/ContactData';
import classes from './Input.module.css';

interface TypePlaceholder {
  type: string;
  placeholder: string;
}
interface Options {
  options?:
    | [
        { value?: string; displayValue?: string },
        { value?: string; displayValue?: string }
      ];
  type?: string;
  placeholder?: string;
}
interface InputProps {
  elementType: string;
  elementConfig?: Options;
  value: string;
  label?: string;
  onChange?: ChangeEventHandler | undefined;
  changed: ChangeEventHandler | undefined;
  invalid: boolean;
  shouldValidate: {};
  touched?: boolean | null;
}
const input: React.FC<InputProps> = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig?.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join('')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
