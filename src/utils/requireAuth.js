import React from 'react';
import firebase from '../../firebase.config.js';

function requireAuth(nextState, replace) {
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/welcome',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

console.log(firebase.auth());

module.exports = requireAuth;
