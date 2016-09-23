import React, { Component } from 'react';

class NewRecipe extends Component {
  handleChange(e) {
    console.log(e.target);
  }
  render() {
    return (
      <form>
        <input type="file" onChange={this.handleChange} />
      </form>
    );
  }
}

export default NewRecipe;
