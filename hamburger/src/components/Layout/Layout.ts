import React from 'react';
import auxiliary from '../../hoc/auxiliary';
const layout = (props) => (
  <auxiliary>
    <div></div>
    <main>{props.children}</main>
  </auxiliary>
);
export default layout;
