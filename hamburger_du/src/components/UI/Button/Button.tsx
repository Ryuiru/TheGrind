import React from 'react';
import './Button.css';
export const Button: React.FC = (props) => (
  <button
    className='Button' //classes[props.btnType].join(' ')  22. Video at the end
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
