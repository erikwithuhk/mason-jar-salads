import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      firebase.auth()
              .onAuthStateChanged((user) => {
                this.setState({
                  userLoggedIn: (user),
                });
              });
    }, 200);
  }
  signOut() {
    firebase.auth()
            .signOut()
            .then(() => {
              console.log('user signed out');
            });
  }
  render() {
    return (
      <div>
        <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
      </div>
    );
  }
}

export default App;
