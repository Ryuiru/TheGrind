import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Orders from './containers/Orders/Orders';
import Logout from './containers/Auth/Logout/Logout';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from './store/reducers/auth';
import { RouteComponentProps } from 'react-router';
import { ActionType } from './store/reducers/burgerBuilder';

interface AppProps extends RouteComponentProps {
  onTryAutoSignup: () => void;
  isAuthenticated: boolean;
}
class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/auth' exact component={Auth} />
        <Redirect to={'/'} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/logout' exact component={Logout} />
          <Redirect to={'/'} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapStateToProps = (state: { auth: InitialState3 }) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState3, void, ActionType>
) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
