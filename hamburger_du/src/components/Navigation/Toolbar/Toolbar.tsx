import React from 'react';
import './Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
export const Toolbar = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.DrawerToggleClicked} />
    <div className='Logo '>
      <Logo height='80%' />
    </div>
    <nav className='Desktop'>
      <NavigationItems />
    </nav>
  </header>
);
