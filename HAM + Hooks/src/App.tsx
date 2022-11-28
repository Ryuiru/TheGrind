import React, { Suspense, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Auth from './containers/Auth/Auth';
// import Orders from './containers/Orders/Orders';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from './store/reducers/auth';
import { RouteComponentProps } from 'react-router';
import { ActionType } from './store/reducers/burgerBuilder';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});
interface AppProps extends RouteComponentProps {
  onTryAutoSignup: () => void;
  isAuthenticated: boolean;
}

const App: React.FC<AppProps> = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);
  //was before componentDidMount
  //second empty argument [] makes useEffect only run once when component is mounted

  let routes = (
    <Switch>
      <Route path='/' exact component={BurgerBuilder} />
      <Route path='/auth' exact render={(props) => <Auth {...props} />} />
      <Redirect to={'/'} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/checkout' render={(props) => <Checkout {...props} />} />
        <Route path='/orders' render={() => <Orders />} />
        <Route path='/auth' exact render={(props) => <Auth {...props} />} />
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/logout' exact component={Logout} />
        <Redirect to={'/'} />
      </Switch>
    );
  }

  return (
    <div>
      <Suspense>
        <Layout>{routes}</Layout>
      </Suspense>
    </div>
  );
};
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
