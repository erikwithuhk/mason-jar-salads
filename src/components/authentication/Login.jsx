import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const stateObject = {};
    const stateKey = e.target.name;
    stateObject[stateKey] = e.target.value;
    this.setState(stateObject);
  }
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <form className="authentication-form">
          <h3 className="authentication-form__header">Log in</h3>
          <input
            className="authentication-form__email-input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__password-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__submit btn btn--primary"
            type="submit"
            value="Log in"
          />
          <p
            className="welcome__authentication-toggle-text"
          >
            Don't have an account?<br /><Link to="/register">Create an account</Link>.
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
