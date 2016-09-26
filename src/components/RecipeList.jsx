import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <Link to="/recipes/new"><button className="new-recipe-button">+</button></Link>
      </section>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
