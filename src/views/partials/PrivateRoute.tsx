import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component:  Component, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        rest.user.googleId
        ? <Component {...rest}/>
        : <Redirect to={{ pathname: '/login', state: { from: props.location} }} />
      )}
    />
);

export default PrivateRoute;