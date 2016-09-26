import React, { Component } from 'react';

const propTypes = {
  recipes: React.PropTypes.array,
  params: React.PropTypes.object,
};

class Recipe extends Component {
  render() {
    // const ingredientElements = this.props.ingredients.map((ingredient) => {
    //   return (
    //     <li className="ingredients-list__ingredient">{ingredient}</li>
    //   );
    // });
    const id = this.props.params.id;
    const defaultRecipe = { name: 'Recipe title', username: 'Recipe author', ingredients: ['Ingredients list'] };
    const recipe = this.props.recipes[id] || defaultRecipe;
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">{recipe.name}</h1>
        <h4 className="recipe-view__author">Created by: <a href="#">{recipe.username}</a></h4>

        <h3 className="ingredients-header">Ingredients</h3>
        <ul className="ingredients-list">
          {/* {ingredientElements} */}
        </ul>
      </section>
    );
  }
}

Recipe.propTypes = propTypes;

export default Recipe;
