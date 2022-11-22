import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders';
class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
