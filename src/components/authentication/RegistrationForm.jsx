import React from 'react';
import { Link } from 'react-router';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
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
          <h3 className="authentication-form__header">Create an account</h3>
          <input
            className="authentication-form__email-input"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__password-input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__username-input"
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__submit btn btn--primary"
            type="submit"
            value="Create account"
          />
          <p
            className="welcome__authentication-toggle-text"
          >
            Already have an account?<br /><Link to="/login">Log in here</Link>.
          </p>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
