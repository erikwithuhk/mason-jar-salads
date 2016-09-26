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
      }
    };
  }
  handleChange(e) {
    console.log(e.target);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  render() {
    return (
      <section className="new-recipe">
        <form className="new-recipe-form" onSubmit={this.handleSubmit}>
          <label>
            <h3>Recipe name</h3>
            <input
              className="new-recipe-form__input"
              type="text"
              name="recipe-name"
              placeholder="My delicious salad"
            />
          </label>
          <h3>Ingredients</h3>
          <label>
            <h4>Greens</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="greens"
              placeholder="Kale, romaine lettuce, spinach..."
            />
          </label>
          <label>
            <h4>Beans</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="beans"
              placeholder="Chick peas, white beans, lentils..."
            />
          </label>
          <label>
            <h4>Grains</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="grains"
              placeholder="Quinoa, bulgar wheat, pasta..."
            />
          </label>
          <label>
            <h4>Veggies</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="veggies"
              placeholder="Carrots, peppers, roasted squash..."
            />
          </label>
          <label>
            <h4>Sweet</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="sweet"
              placeholder="Raisins, diced apple, mango, ..."
            />
          </label>
          <label>
            <h4>Crunchy</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="crunchy"
              placeholder="Almonds, walnuts, croutons..."
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
