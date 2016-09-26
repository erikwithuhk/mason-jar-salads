import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
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
      username: null,
      recipes: [],
    };
    this.signOut = this.signOut.bind(this);
    this.publishRecipe = this.publishRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
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
                  this.getUsernameByID(this.state.userID);
                  this.getRecipes();
                }
              });
    }, 200);
  }
  getUsernameByID(userID) {
    const userRef = firebase.database().ref(`users/${userID}`);
    userRef.on('value', (snapshot) => {
      const userData = snapshot.val();
      const username = userData.username;
      this.setState({ username });
    });
  }
  showHeaderOnLogin() {
    if (this.state.userLoggedIn) {
      return (
        <header>
          <nav className="top-nav">
            <h1 className="top-nav__brand">Mason Jar Salads</h1>
            <nav className="top-nav__sub-nav">
              <Link to="/" >All recipes</Link>
              <Link to={`/${this.state.username}`} >My recipes</Link>
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
                username: null,
              });
            });
  }
  getRecipes() {
    const recipeListRef = firebase.database().ref('recipes');
    recipeListRef.on('value', (snapshot) => {
      const recipesData = snapshot.val();
      let recipes = [];
      recipes = Object.keys(recipesData).map((id) => {
        const recipeData = recipesData[id];
        return {
          id,
          name: recipeData.name,
          userID: recipeData.userID,
          username: recipeData.username,
          ingredients: recipeData.ingredients,
        };
      });
      this.setState({ recipes });
    });
  }
  publishRecipe(data, recipeID) {
    const nestedData = {
      userID: this.state.userID,
      username: this.state.username,
      name: data.name,
      ingredients: {
        greens: data.greens.toLowerCase(),
        beans: data.beans.toLowerCase(),
        grains: data.grains.toLowerCase(),
        veggies: data.veggies.toLowerCase(),
        sweet: data.sweet.toLowerCase(),
        crunchy: data.crunchy.toLowerCase(),
        dressing: data.dressing.toLowerCase(),
      },
    };

    let recipeKey;
    if (recipeID) {
      recipeKey = recipeID;
    } else {
      recipeKey = firebase.database().ref('recipes').push().key;
    }

    const recipeData = {};
    recipeData[`/recipes/${recipeKey}`] = nestedData;
    return firebase.database().ref().update(recipeData);

    // const userRecipesRef = firebase.database().ref(`users/${this.state.userID}/recipes`);
    // userRecipesRef.on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });
  }
  deleteRecipe(recipeID) {
    firebase.database().ref(`recipes/${recipeID}`).remove();
  }
  redirectToRecipes() {
    hashHistory.push('/');
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      currentUserID: this.state.userID,
      recipes: this.state.recipes,
      publishRecipe: this.publishRecipe,
      deleteRecipe: this.deleteRecipe,
      redirectToRecipes: this.redirectToRecipes,
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
