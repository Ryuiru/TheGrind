import React, { Component, MouseEventHandler } from 'react';
import './Backdrop.css';

export interface PropsBackdrop {
  show: string | boolean;
  clicked: MouseEventHandler | undefined;
}
const backdrop: React.FC<PropsBackdrop> = (props) =>
  props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null;

export default backdrop;
