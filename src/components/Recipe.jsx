import React, { Component } from 'react';

const propTypes = {
  recipeName: React.PropTypes.string,
  authorName: React.PropTypes.string,
  ingredients: React.PropTypes.array,
};

class Recipe extends Component {
  render() {
    const ingredientElements = this.props.ingredients.map((ingredient) => {
      return (
        <li className="ingredients-list__ingredient">{ingredient}</li>
      );
    });
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">{this.props.recipeName}</h1>
        <h4 className="recipe-view__author">Created by: <a href="#">{this.props.authorName}</a></h4>

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
