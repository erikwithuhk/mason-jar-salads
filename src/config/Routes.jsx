import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import requireAuth from '../utils/requireAuth.js';
import App from '../components/App.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

const routes = () => (
  <Router history={hashHistory} >
    <Route path="/" >
      <IndexRoute component={App} onEnter={requireAuth} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

export default routes;
