import React from 'react';
import firebase from '../../firebase.config.js';

function requireAuth(nextState, replace) {
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/sign-in',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

module.exports = requireAuth;
