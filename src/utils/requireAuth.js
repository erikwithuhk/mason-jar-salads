import React from 'react';
import firebase from '../../firebase.config.js';

function requireAuth(nextState, replace) {
  firebase.auth().onAuthStateChanged((currentuser) => {
    if (currentuser) {
      console.log('USER:', currentuser);
    } else {
      replace({
        pathname: '/welcome',
        state: { nextPathname: nextState.location.pathname },
      });
      console.log('USER NOT SIGNED IN');
    }
  });
  // if (firebase.auth().currentUser === null) {
  //   replace({
  //     pathname: '/welcome',
  //     state: { nextPathname: nextState.location.pathname },
  //   });
  // }
}

console.log(firebase.auth());
console.log(firebase.auth().currentUser === null);

module.exports = requireAuth;
