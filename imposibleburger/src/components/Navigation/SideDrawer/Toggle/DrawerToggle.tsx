import React, { Component, MouseEventHandler } from 'react';
interface PropsToggle {
  clicked: MouseEventHandler | undefined;
}
const drawerToggle: React.FC<PropsToggle> = (props) => (
  <div className='DrawerToggle' onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
