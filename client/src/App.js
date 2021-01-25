import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import Alert from './components/layout/Alert';
import Register from './components/layout/Register';
//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return(
  <Provider store={store}>
    <Router>
      <Navbar />
      {/*We don't have a section container here, do we need one?*/}
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  </Provider>
   );
};

export default App;
