import React, { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Auth from './containers/Auth/Auth';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
// import Orders from './containers/Orders/Orders';
import Logout from './containers/Auth/Logout/Logout';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from './store/reducers/auth';
import { RouteComponentProps } from 'react-router';
import { ActionType } from './store/reducers/burgerBuilder';

const asyncCheckout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});
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
      <Suspense>
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/auth' exact component={asyncAuth} />
          <Redirect to={'/'} />
        </Switch>
      </Suspense>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Suspense>
          <Switch>
            <Route path='/checkout' component={asyncCheckout} />
            <Route path='/orders' component={asyncOrders} />
            <Route path='/auth' exact component={asyncAuth} />
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/logout' exact component={Logout} />
            <Redirect to={'/'} />
          </Switch>
        </Suspense>
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
