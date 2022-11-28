import React, { MouseEventHandler } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../HOC/Auxiliary';
import './SideDrawer.css';
interface PropsSideDrawer {
  open: boolean;
  closed: MouseEventHandler;
  isAuth: boolean;
}
const sideDrawer: React.FC<PropsSideDrawer> = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <Logo />
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Auxiliary>
  );
};
export default sideDrawer;
