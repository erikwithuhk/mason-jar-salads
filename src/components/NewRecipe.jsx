import React, { Component } from 'react';

class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: {
        greens: '',
        beans: '',
        grains: '',
        veggies: '',
        sweet: '',
        crunchy: '',
      },
    };
  }
  handleChange(e) {
    const isIngredient = e.target.getAttribute('data-ingredient');
    console.log(isIngredient);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  render() {
    return (
      <section className="new-recipe">
        <form className="new-recipe-form" onSubmit={this.handleSubmit}>
          <label htmlFor="recipe-name">
            <h3>Recipe name</h3>
            <input
              className="new-recipe-form__input"
              type="text"
              name="recipe-name"
              placeholder="My delicious salad"
              data-ingredient="false"
              onChange={this.handleChange}
            />
          </label>
          <h3>Ingredients</h3>
          <label htmlFor="greens">
            <h4>Greens</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="greens"
              placeholder="Kale, romaine lettuce, spinach..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="beans">
            <h4>Beans</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="beans"
              placeholder="Chick peas, white beans, lentils..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="grains">
            <h4>Grains</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="grains"
              placeholder="Quinoa, bulgar wheat, pasta..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="veggies">
            <h4>Veggies</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="veggies"
              placeholder="Carrots, peppers, roasted squash..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="sweet">
            <h4>Sweet</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="sweet"
              placeholder="Raisins, diced apple, mango, ..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="crunchy">
            <h4>Crunchy</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="crunchy"
              placeholder="Almonds, walnuts, croutons..."
              data-ingredient="true"
              onChange={this.handleChange}
            />
          </label>
          <input
            className="new-recipe-form__submit"
            type="submit"
            value="Create recipe"
          />
        </form>
      </section>
    );
  }
}

export default NewRecipe;
