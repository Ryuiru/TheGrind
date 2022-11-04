import React, { Component } from 'react';
import './DrawerToggle.css';
const DrawerToggle: React.FC = (props) => (
  <div className='DrawerToggle' onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default DrawerToggle;
