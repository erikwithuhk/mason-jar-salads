import React, { Component } from 'react';

const propTypes = {
  recipes: React.PropTypes.array,
  createRecipe: React.PropTypes.func,
  redirectToRecipes: React.PropTypes.func,
  params: React.PropTypes.object,
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
    } else {
      console.log('New recipe');
    }
  }
  componentWillReceiveProps(nextprops) {
    const id = this.props.params.id;
    this.getRecipeData(nextprops);
  }
  getRecipeData(props = this.props) {
    const id = props.params.id;
    props.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        this.setState({
          name: recipe.name,
          greens: recipe.greens,
          beans: recipe.beans,
          grains: recipe.grains,
          veggies: recipe.veggies,
          sweet: recipe.sweet,
          crunchy: recipe.crunchy,
          dressing: recipe.dressing,
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
    this.props.createRecipe(this.state);
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
