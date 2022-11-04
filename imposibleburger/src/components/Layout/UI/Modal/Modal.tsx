import React, { Component } from 'react';
import './Modal.css';
interface Props {
  children?: React.ReactNode;
  show: boolean;
}
const Modal: React.FC<Props> = (props) => (
  <div
    className='Modal'
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0',
    }}
  >
    {props.children}
  </div>
);
export default Modal;
