import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

interface PropsItem {
  exact?: boolean | undefined;
  children: React.ReactNode;
  link: string;
  active?: string;
}

const navigationItem: React.FC<PropsItem> = (props) => (
  <li className='NavigationItem'>
    <NavLink to={props.link} exact={props.exact} activeClassName='active'>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
