import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// Application Component Imports
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Saved from './components/Saved';
import Register from './components/Register';

function App() {

  return (
    <div className="app-wrapper">
      <Route path='/' component={Navigation} />
      <Route exact path='/' render={() => (<Redirect to='/dashboard'/>)}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
      <PrivateRoute path="/dashboard/saved" component={Saved} />
    </div>
  );
}

export default App;
