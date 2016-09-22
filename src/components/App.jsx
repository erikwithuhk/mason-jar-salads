import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
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
      recipes: [],
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
                  this.getRecipes();
                }
              });
    }, 200);
  }
  getRecipes() {
    firebase.database()
            .ref('recipes')
            .on('value', (snapshot) => {
              console.log(snapshot);
            });
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
              this.setState({
                userLoggedIn: false,
                userID: null,
              });
            });
  }
  createRecipe() {
    const data = {
      name: 'new salad 2',
      userID: this.state.userID,
    };
    const url = 'https://mason-jar-salads-3cd83.firebaseio.com/recipes.json';
    request.post(url)
           .send(data)
           .then((response) => {
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
