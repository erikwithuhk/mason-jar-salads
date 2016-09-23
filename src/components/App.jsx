import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import * as firebase from 'firebase';

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
    this.getRecipes();
  }
  getRecipes() {
    const url = 'https://mason-jar-salads-3cd83.firebaseio.com/recipes.json';
    request.get(url)
           .then((response) => {
             const recipesObject = response.body;
             let recipes = [];
             recipes = Object.keys(recipesObject).map((id) => {
               const recipeData = recipesObject[id];
               return {
                 id,
                 name: recipeData.name,
                 userID: recipeData.userID,
                 username: recipeData.username,
               };
             });
             this.setState({ recipes });
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
  createRecipe(name) {
    const data = {
      name,
      userID: this.state.userID,
      username: 'erikwithuhk',
    };
    const recipeListRef = firebase.database().ref('recipes');
    const newRecipeRef = recipeListRef.push();
    newRecipeRef.set(data);
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      recipes: this.state.recipes,
    });
    return (
      <div className="container">
        {this.showHeaderOnLogin()}
        <main>
          {childrenWithProps}
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
