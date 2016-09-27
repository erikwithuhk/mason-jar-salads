import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

const propTypes = {
  recipes: React.PropTypes.array,
  params: React.PropTypes.object,
  router: React.PropTypes.object,
  currentUserID: React.PropTypes.string,
  currentUsername: React.PropTypes.string,
  deleteRecipe: React.PropTypes.func,
};

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      currentRecipe: {
        name: '',
        username: '',
        userID: '',
        ingredients: {},
      },
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.props.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        this.setState({
          currentRecipe: recipe,
        });
      }
    });
  }
  componentWillReceiveProps(nextprops) {
    const id = this.props.params.id;
    nextprops.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        this.setState({
          currentRecipe: recipe,
        });
      }
    });
  }
  recipeEditDeleteButtons() {
    if (this.state.currentRecipe.userID === this.props.currentUserID) {
      return (
        <div className="update-delete-buttons">
          <Link to={`/recipes/${this.props.params.id}/update`}>
            <button className="btn btn--primary">Update recipe</button>
          </Link>
          <button
            className="btn btn--secondary"
            onClick={this.handleDelete}
          >
          Delete recipe
          </button>
        </div>
      );
    }
  }
  handleDelete() {
    const recipeID = this.props.params.id;
    this.props.deleteRecipe(recipeID);
    this.props.router.push(`/users/${this.props.currentUsername}`);
  }
  render() {
    const recipe = this.state.currentRecipe;
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">{recipe.name}</h1>
        <h4 className="recipe-view__author">Created by: <Link to={`/users/${recipe.username}`}>{recipe.username}</Link></h4>
        <p className="yield">Makes 4 1-quart mason jar salads</p>
        <h3 className="ingredients-header">Ingredients</h3>
        <ul className="ingredients-list">
          <li className="ingredients-list__ingredient">4 cups {recipe.ingredients.greens}</li>
          <li
            className="ingredients-list__ingredient"
          >
            4 cups {recipe.ingredients.grains}, cooked
          </li>
          <li className="ingredients-list__ingredient">1 15-oz can {recipe.ingredients.beans}</li>
          <li className="ingredients-list__ingredient">2 cups {recipe.ingredients.veggies}</li>
          <li className="ingredients-list__ingredient">2 cups {recipe.ingredients.sweet}</li>
          <li className="ingredients-list__ingredient">1 cup {recipe.ingredients.crunchy}</li>
          <li
            className="ingredients-list__ingredient"
          >
            1/2 cup {recipe.ingredients.dressing} dressing
          </li>
        </ul>
        {this.recipeEditDeleteButtons()}
      </section>
    );
  }
}

Recipe.propTypes = propTypes;

export default withRouter(Recipe);
