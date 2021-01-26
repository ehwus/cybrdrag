import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from '../layout/Register';
import Login from '../layout/Login';
import Alert from "../layout/Alert";
import Dashboard from '../Dashboard/Dashboard';
import Performers from '../layout/Performers';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
  return (
    <section className="container">
      <Alert/>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/performers" component={Performers}/>
      </Switch>
    </section>
  );
};

export default Routes;