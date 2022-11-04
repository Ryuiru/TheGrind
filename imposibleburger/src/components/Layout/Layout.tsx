import React from 'react';
import { JsxAttribute } from 'typescript';
import Auxiliary from '../../HOC/Auxiliary';
import './Layout.css';
interface Props {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment;
}

const layout: React.FC<Props> = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className='Content'>{props.children}</main>
  </Auxiliary>
);
export default layout;
