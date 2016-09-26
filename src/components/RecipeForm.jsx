import React, { Component } from 'react';

const propTypes = {
  params: React.PropTypes.object,
  recipes: React.PropTypes.array,
  publishRecipe: React.PropTypes.func,
  redirectToRecipes: React.PropTypes.func,
};

class RecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      greens: '',
      beans: '',
      grains: '',
      veggies: '',
      sweet: '',
      crunchy: '',
      dressing: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    if (this.props.params.id) {
      this.getRecipeData();
    }
  }
  componentWillReceiveProps(nextprops) {
    this.getRecipeData(nextprops);
  }
  getRecipeData(props = this.props) {
    const id = props.params.id;
    props.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        this.setState({
          name: recipe.name,
          greens: recipe.ingredients.greens,
          beans: recipe.ingredients.beans,
          grains: recipe.ingredients.grains,
          veggies: recipe.ingredients.veggies,
          sweet: recipe.ingredients.sweet,
          crunchy: recipe.ingredients.crunchy,
          dressing: recipe.ingredients.dressing,
        });
      }
    });
  }
  handleChange(e) {
    const field = e.target.name;
    const stateObject = {};
    stateObject[field] = e.target.value;
    this.setState(stateObject);
  }
  submitText() {
    if (this.props.params.id) {
      return 'Update recipe';
    }
    return 'Create recipe';
  }
  handleSubmit(e) {
    e.preventDefault();
    const recipeID = this.props.params.id;
    if (recipeID) {
      this.props.publishRecipe(this.state, recipeID);
    } else {
      this.props.publishRecipe(this.state);
    }
    this.props.redirectToRecipes();
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.redirectToRecipes();
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
              name="name"
              placeholder="My delicious salad"
              value={this.state.name}
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
              value={this.state.greens}
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
              value={this.state.beans}
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
              value={this.state.grains}
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
              value={this.state.veggies}
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
              value={this.state.sweet}
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
              value={this.state.crunchy}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="dressing">
            <h4>Dressing</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="dressing"
              placeholder="Balsamic vinaigrette, blue cheese..."
              value={this.state.dressing}
              onChange={this.handleChange}
            />
          </label>
          <input
            className="new-recipe-form__submit"
            type="submit"
            value={this.submitText()}
          />
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </section>
    );
  }
}

RecipeForm.propTypes = propTypes;

export default RecipeForm;
