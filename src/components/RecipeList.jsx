import React, { Component } from 'react';
import { Link } from 'react-router';
import RecipeCard from './RecipeCard.jsx';

const propTypes = {
  params: React.PropTypes.object,
  currentUsername: React.PropTypes.string,
  recipes: React.PropTypes.array,
};

class RecipeList extends Component {
  generateRecipeListHeader() {
    if (this.props.params.username) {
      return `${this.props.params.username}'s Recipes`;
    }
    return 'Browse Recipes';
  }
  showNewRecipeButton() {
    if (this.props.params.username === this.props.currentUsername) {
      return (
        <Link to="/recipes/new"><button className="new-recipe-button">+</button></Link>
      );
    }
  }
  renderRecipeCards() {
    const recipes = this.props.recipes;
    const recipeCards = recipes.map((recipe) => {
      if (this.props.params.username) {
        if (recipe.username === this.props.params.username) {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              recipeName={recipe.name}
              authorName={recipe.username}
            />
          );
        }
      } else {
        return (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            recipeName={recipe.name}
            authorName={recipe.username}
          />
        );
      }
    });
    return recipeCards;
  }
  render() {
    return (
      <section className="recipes">
      <h2>{this.generateRecipeListHeader()}</h2>
        <div className="recipe-cards">
          {this.renderRecipeCards()}
        </div>
        {this.showNewRecipeButton()}
      </section>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
