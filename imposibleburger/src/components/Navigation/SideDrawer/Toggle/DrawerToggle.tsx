import React, { MouseEventHandler } from 'react';
import './DrawerToggle.css';
interface PropsToggle {
  clicked: MouseEventHandler | undefined;
}
const DrawerToggle: React.FC<PropsToggle> = (props) => (
  <div className='DrawerToggle' onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
