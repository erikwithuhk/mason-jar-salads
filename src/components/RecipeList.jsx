import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

const propTypes = {
  recipes: React.PropTypes.array,
};

class RecipeList extends Component {
  renderRecipeCards() {
    const recipes = this.props.recipes;
    const recipeCards = recipes.map(recipe => (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        recipeName={recipe.name}
        authorName={recipe.username}
      />
    ));
    return recipeCards;
  }
  render() {
    return (
      <section className="recipes">
        {this.renderRecipeCards()}
      </section>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
