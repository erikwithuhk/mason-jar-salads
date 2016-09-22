import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import requireAuth from '../utils/requireAuth.js';
import App from '../components/App.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} onEnter={requireAuth} >
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

export default Routes;
