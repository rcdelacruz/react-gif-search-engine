import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../store/configureStore';

import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Favorites from './Favorites';

const PrivateRoute = ({ component: Component, authenticated, ...props }) => (
  <Route
    {...props}
    render={() => authenticated === true // eslint-disable-line no-confusing-arrow
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
  />
);

const PublicRoute = ({ component: Component, authenticated, ...props }) => (
  <Route
    {...props}
    render={() => authenticated === false // eslint-disable-line no-confusing-arrow
      ? <Component {...props} />
      : <Redirect to="/favorites" />}
  />
);

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />

          <div className="container">
            <Route exact path="/" component={Home} />
            <PublicRoute authenticated={this.props.authenticated} path="/signup" component={Signup} />
            <PublicRoute authenticated={this.props.authenticated} path="/login" component={Login} />
            <PrivateRoute authenticated={this.props.authenticated} path="/favorites" component={Favorites} />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(App);
