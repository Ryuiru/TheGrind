import React, { Component } from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import { Backdrop } from '../../UI/Modal/Backdrop/Backdrop';
import Auxiliary from '../../../HOC/Auxiliary';
// interface Props{
//   open:
//   closed:
// }
export const SideDrawer: React.FC<Props> = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Close'];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className='Logo'>
          <Logo height='11%' />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};
