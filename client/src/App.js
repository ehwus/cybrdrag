import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Landing from "./components/layout/Landing";
import Routes from './components/routing/Routes';


//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        {/*We don't have a section container here, do we need one?*/}
        <Alert/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route component={Routes}/>
        </Switch>
      </Router>
    </Provider>
  )
};

export default App;
