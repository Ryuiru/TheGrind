import React, { ChangeEventHandler } from 'react';
import {
  DevileryMethod,
  SomeValues,
} from '../../../containers/Checkout/ContactData/ContactData';
import './Input.css';
interface InputProps extends SomeValues {
  elementType: string;
  elementConfig: {
    options?: [
      { value: string; displayValue: string },
      { value: string; displayValue: string }
    ];
    type?: string;
    placeholder?: string;
  };
  value: string;
  label?: string;
  onChange?: ChangeEventHandler | undefined;
  changed: ChangeEventHandler | undefined;
}
const input: React.FC<InputProps> = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className='InputElement'
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
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className='Input'>
      <label className='Label'>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
