import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';

const propTypes = {
  recipes: React.PropTypes.array,
};

class Recipes extends Component {
  renderRecipeCards() {
    const recipes = this.props.recipes;
    const recipeCards =  recipes.map((recipe) => {
      return <RecipeCard key={recipe.id} name={recipe.name} />;
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

Recipes.propTypes = propTypes;

export default Recipes;
