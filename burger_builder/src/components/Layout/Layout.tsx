import React from 'react';
import ReactDOM from 'react-dom';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const Layout = (props: any) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

// class layout extends React.Component {
//   render() {
//     return (
//       <Auxiliary>
//         <div>Toolbar, SideDrawer, Backdrop</div>
//         {/* <main>{props.children}</main> */}
//       </Auxiliary>
//     );
//   }
// }
export default Layout;
