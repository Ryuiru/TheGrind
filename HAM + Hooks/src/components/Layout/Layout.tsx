import React, { useState } from 'react';
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
const Layout: React.FC<PropsLayout> = (props) => {
  // state = {
  //   showSideDrawer: false,
  // };
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    // this.setState({ showSideDrawer: false });
    setSideDrawerIsVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    // this.setState((preState) => {
    //   return { showSideDrawer: !preState.showSideDrawer };
    // });
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
  return (
    <Auxiliary>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <main className='Content'>{props.children}</main>
    </Auxiliary>
  );
};

const mapStateToProps = (state: { auth: InitialState3 }) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
