import React from 'react';
import Public from 'components/Public';
import Login from 'components/Public/Login';
import UserProfile from 'components/Private/UserProfile';
import { Route, Redirect, Switch } from 'react-router-dom';
/**
 * From https://tylermcginnis.com/react-router-protected-routes-authentication/
 */
export default ({ authStatus }) => {
  return (
    <Switch>
      <Route path="/" exact component={Public} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute
        path="/profile"
        component={UserProfile}
        authStatus={authStatus}
      />
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, authStatus, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authStatus ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
