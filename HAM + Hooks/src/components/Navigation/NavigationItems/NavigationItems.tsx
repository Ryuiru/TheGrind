import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

interface NavItems {
  isAuthenticated: boolean;
}
const navigationItems = (props: NavItems) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link='/orders'>Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link='/auth'>Authenticate urself</NavigationItem>
    ) : (
      <NavigationItem link='/logout'>Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
