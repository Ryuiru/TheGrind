import React, { Component, MouseEventHandler } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/Toggle/DrawerToggle';
import './Toolbar.css';

interface PropsToolbar {
  drawerToggleClicked: MouseEventHandler;
}
const toolbar: React.FC<PropsToolbar> = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className='Logo'>
      <Logo />
    </div>
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
