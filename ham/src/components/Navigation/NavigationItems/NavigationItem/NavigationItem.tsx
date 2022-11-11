import React from 'react';
import './NavigationItem.css';

interface PropsItem {
  children: React.ReactNode;
  link: string;
  active?: string;
}

const navigationItem: React.FC<PropsItem> = (props) => (
  <li className='NavigationItem'>
    <a href={props.link} className={props.active}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
