import React from 'react';
import './Backdrop.css';
export const Backdrop = (props: {
  show: any;
  clicked: React.MouseEventHandler<HTMLDivElement> | undefined;
}) =>
  props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null;
