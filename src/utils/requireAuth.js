import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

function requireAuth(nextState, replace, callback) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      replace({
        pathname: '/welcome',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  });
}

module.exports = requireAuth;
