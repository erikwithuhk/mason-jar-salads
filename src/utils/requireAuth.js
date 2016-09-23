// const React = require('react');
import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

// firebase.initializeApp(config);

function requireAuth(nextState, replace) {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user === null) {
      console.log(nextState);
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  });
}

// const auth = new Promise(
//   function(resolve, reject) {
//     let fire = firebase.auth()
//     resolve(fire)
//   }
// )

// console.log(auth);

// const userIsInATeam = (nextState, replace, callback) => {
//   fetch(...)
//     .then(response = response.json())
//     .then(userTeams => {
//       if (userTeams.length === 0) {
//         replace(`/users/${nextState.params.userId}/teams/new`)
//       }
//       callback();
//     })
//     .catch(error => {
//       // do some error handling here
//       callback(error);
//     })
// }

// auth.then((res) => {
//   if (res.currentUser === null) {
//     console.log(res.currentUser);
//   }
// })
// function redirectToWelcome(res) {
//   if (res.currentUser === null) {
//     replace({
//       pathname: '/welcome',
//       state: { nextPathname: nextState.location.pathname },
//     })
//   }
// }
//
// function requireAuth(nextState, replace,) {
//   auth.then((res) => {
//     redirectToWelcome(res)
//   })
// }
//
// function requireAuth(nextState, replace, callback) {
//     firebase.auth().then((response) => {
//       console.log(response.currentUser);
//     });
    // if (res.currentUser === null) {
    //   replace({
    //     pathname: '/welcome',
    //     state: { nextPathname: nextState.location.pathname },
    //   })
    // }
  // })
// }

// console.log(firebase.auth());

// setTimeout(function() {
//   console.log(firebase.auth().currentUser === null)
// }, 5000);

module.exports = requireAuth;
