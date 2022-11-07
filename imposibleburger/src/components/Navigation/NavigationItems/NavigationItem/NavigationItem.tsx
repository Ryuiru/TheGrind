import React, { Component } from 'react';
import './NavigationItem.css';

interface PropsItem {
  children: React.ReactNode;
  link: string;
  active?: string;
}

const navigationItem: React.FC<PropsItem> = (props) => (
  <li className='Navigationitem'>
    <a href={props.link} className={props.active}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
