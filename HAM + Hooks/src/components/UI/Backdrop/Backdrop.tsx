import React, { MouseEventHandler } from 'react';
import './Backdrop.css';

export interface PropsBackdrop {
  show?: boolean;
  // clicked?: (() => void) | null;
  clicked?: MouseEventHandler | undefined;
}
const backdrop: React.FC<PropsBackdrop> = (props) =>
  props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null;

export default backdrop;
