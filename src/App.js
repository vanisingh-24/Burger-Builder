import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  
  render() {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder/>
          <Checkout /> */}
          <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);