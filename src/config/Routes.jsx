import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
  </Router>
);

export default Routes;
