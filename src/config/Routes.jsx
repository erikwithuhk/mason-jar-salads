import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import requireAuth from '../utils/requireAuth.js';
import App from '../components/App.jsx';
import RecipeForm from '../components/RecipeForm.jsx';
import RecipeList from '../components/RecipeList.jsx';
import Recipe from '../components/Recipe.jsx';
import Authentication from '../components/authentication/Authentication.jsx';
import Registration from '../components/authentication/Registration.jsx';
import Login from '../components/authentication/Login.jsx';

const routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={RecipeList} />
      <Route path="recipes">
        <Route path="new" component={RecipeForm} />
        <Route path=":id">
          <IndexRoute component={Recipe} />
          <Route path="update" component={RecipeForm} />
        </Route>
      </Route>
      <Route path="users">
        <Route path=":username" component={RecipeList} />
      </Route>
      <Route path="welcome" component={Authentication} />
      <Route path="register" component={Registration} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

export default routes;
