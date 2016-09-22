import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <form className="authentication-form">
          <h3 className="authentication-form__header">Create an account</h3>
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
            className="authentication-form__username-input"
            type="username"
            placeholder="Username"
          />
          <input
            className="authentication-form__submit"
            type="submit"
            value="Create account"
          />
          <p
            className="welcome__authentication-toggle-text"
          >
          Already have an account? Log in here.
          </p>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
