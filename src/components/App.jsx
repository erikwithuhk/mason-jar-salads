import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }
  showHeaderOnLogin() {
    if (this.state.userLoggedIn) {
      return (
        <header>
          <nav className="top-nav">
            <h1 className="top-nav__brand">Mason Jar Salads</h1>
            <nav className="top-nav__sub-nav">
              <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
              <a href="http://www.barkbox.com">Bark box</a>
            </nav>
          </nav>
        </header>
      );
    }
  }
  componentDidMount() {
    setTimeout(() => {
      firebase.auth()
              .onAuthStateChanged((user) => {
                this.setState({
                  userLoggedIn: (user !== null),
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
      <div className="container">
        {this.showHeaderOnLogin()}
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
