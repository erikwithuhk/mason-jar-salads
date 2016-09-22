const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDKuUvOQjkIU8ptzbi_YfrY0zQHVfgi-Fw',
  authDomain: 'mason-jar-salads-3cd83.firebaseapp.com',
  databaseURL: 'https://mason-jar-salads-3cd83.firebaseio.com',
  storageBucket: 'mason-jar-salads-3cd83.appspot.com',
  messagingSenderId: '618119116084',
};
firebase.initializeApp(config);

module.exports = firebase;
