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
console.log(firebase.auth().currentUser === null);

module.exports = requireAuth;
