import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <section className="recipe-view">
        <h1 className="recipe-view__name">Recipe name</h1>
        <h4 className="recipe-view__author">Created by: <a href="#">erikwithuhk</a></h4>

        <h3 className="ingredients-header">Ingredients</h3>
        <ul className="ingredients-list">
          <li className="ingredients-list__ingredient">1 cup kale</li>
          <li className="ingredients-list__ingredient">2 tbsp dressing</li>
        </ul>
      </section>
    );
  }
}

export default Recipe;
