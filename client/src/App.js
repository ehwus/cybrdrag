import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import Register from './components/layout/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/*We don't have a section container here, do we need one?*/}
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
