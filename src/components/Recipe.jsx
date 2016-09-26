import React, { Component } from 'react';

const propTypes = {
  recipes: React.PropTypes.array,
  params: React.PropTypes.object,
};

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      currentRecipe: {
        name: '',
        username: '',
        ingredients: [''],
      },
    };
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
  render() {
    const recipe = this.state.currentRecipe;
    let keyValue = 0;
    const ingredientElements = recipe.ingredients.map((ingredient) => {
      keyValue += 1;
      return (
        <li key={keyValue} className="ingredients-list__ingredient">{ingredient}</li>
      );
    });
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">{recipe.name}</h1>
        <h4 className="recipe-view__author">Created by: <a href="#">{recipe.username}</a></h4>

        <h3 className="ingredients-header">Ingredients</h3>
        <ul className="ingredients-list">
          {ingredientElements}
        </ul>
      </section>
    );
  }
}

Recipe.propTypes = propTypes;

export default Recipe;
