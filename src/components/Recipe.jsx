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
    // let keyValue = 0;
    // const ingredientElements = recipe.ingredients.map((ingredient) => {
    //   keyValue += 1;
    //   return (
    //     <li key={keyValue} className="ingredients-list__ingredient">{ingredient}</li>
    //   );
    // });
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">{recipe.name}</h1>
        <h4 className="recipe-view__author">Created by: <a href="#">{recipe.username}</a></h4>
        <p className="yield">Makes 4 1-quart mason jar salads</p>
        <h3 className="ingredients-header">Ingredients</h3>
        <ul className="ingredients-list">
          <li className="ingredients-list__ingredient">4 cups {recipe.ingredients.greens}</li>
          <li className="ingredients-list__ingredient">4 cups {recipe.ingredients.grains}, cooked</li>
          <li className="ingredients-list__ingredient">1 15-oz can {recipe.ingredients.beans}</li>
          <li className="ingredients-list__ingredient">2 cups {recipe.ingredients.veggies}</li>
          <li className="ingredients-list__ingredient">2 cups {recipe.ingredients.sweet}</li>
          <li className="ingredients-list__ingredient">1 cup {recipe.ingredients.crunchy}</li>
          <li className="ingredients-list__ingredient">1/2 cup {recipe.ingredients.dressing} dressing</li>
        </ul>
      </section>
    );
  }
}

Recipe.propTypes = propTypes;

export default Recipe;
