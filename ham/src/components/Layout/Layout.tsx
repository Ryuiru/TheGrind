import React from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../../HOC/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';
import { InitialState3 } from '../../store/reducers/auth';

interface LayoutState {
  showSideDrawer: boolean;
}
interface PropsLayout {
  children: React.ReactNode;
  isAuthenticated: boolean;
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
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className='Content'>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state: { auth: InitialState3 }) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
