import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

const propTypes = {
  recipes: React.PropTypes.array,
};

class RecipeList extends Component {
  renderRecipeCards() {
    const recipes = this.props.recipes;
    const recipeCards = recipes.map((recipe) => {
      return (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          username={recipe.username}
        />
      );
    });
    return recipeCards;
  }
  render() {
    return (
      <section className="recipes clearfix">
        {this.renderRecipeCards()}
      </section>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
