import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <form className="authentication-form">
          <h3 className="authentication-form__header">Log in</h3>
          <input
            className="authentication-form__email-input"
            type="email"
            placeholder="Email"
          />
          <input
            className="authentication-form__password-input"
            type="password"
            placeholder="Password"
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
