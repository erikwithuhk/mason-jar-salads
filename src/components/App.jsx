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
      userID: null,
    };
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      firebase.auth()
              .onAuthStateChanged((user) => {
                if (user !== null) {
                  this.setState({
                    userLoggedIn: true,
                    userID: user.uid,
                  });
                }
              });
    }, 200);
  }
  showHeaderOnLogin() {
    if (this.state.userLoggedIn) {
      return (
        <header>
          <nav className="top-nav">
            <h1 className="top-nav__brand">Mason Jar Salads</h1>
            <nav className="top-nav__sub-nav">
              <Link to="/" >My recipes</Link>
              <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
            </nav>
          </nav>
        </header>
      );
    }
    return false;
  }
  signOut() {
    firebase.auth()
            .signOut()
            .then(() => {
              console.log('user signed out');
            });
  }
  createRecipe() {
    const data = {
      name: 'new salad 2',
      userID: this.state.userID,
    };
    firebase.database().ref('recipes').set(data).then((response) => {
      console.log(response);
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
