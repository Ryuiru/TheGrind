import React, { Component } from 'react';
import Auxiliary from '../../HOC/Auxiliary';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';
// import { AuxProps } from '../../HOC/Auxiliary';
// export interface LayoutProps  {
//    children: React.ReactNode
// }
export class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className='Content'>{this.props.children}</main>
      </Auxiliary>
    );
  }
}
