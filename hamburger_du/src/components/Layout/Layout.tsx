import React from 'react';
import Auxiliary from '../../HOC/Auxiliary';

import './Layout.css';

export const Layout = (props: any) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);
