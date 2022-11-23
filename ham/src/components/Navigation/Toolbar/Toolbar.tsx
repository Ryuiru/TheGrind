import React, { MouseEventHandler } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/Toggle/DrawerToggle';
import './Toolbar.css';

interface PropsToolbar {
  drawerToggleClicked: MouseEventHandler;
  isAuth: boolean;
}
const toolbar: React.FC<PropsToolbar> = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    {/* <div className='Logo'> */}
    <Logo height='80%' />
    {/* </div> */}
    <nav className='DesktopOnly'>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);
export default toolbar;
