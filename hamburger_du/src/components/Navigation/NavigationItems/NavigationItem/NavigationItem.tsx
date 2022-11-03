import React from 'react';
import './NavigationItem.css';
export const NavigationItem = (props) => (
  <li className='NavigationItem'>
    <a href={props.link} className={props.active}>
      {props.children}
    </a>
  </li>
);
/* <a href={props.link} className={props.active ? classes.active : null}> */
