import React from 'react';
import Auxiliary from '../../HOC/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

interface LayoutState {
  showSideDrawer: boolean;
}
interface PropsLayout {
  children: React.ReactNode;
}
class Layout extends React.Component<PropsLayout, LayoutState> {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((preState) => {
      return { showSideDrawer: !preState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className='Content'>{this.props.children}</main>
      </Auxiliary>
    );
  }
}
export default Layout;
