import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';

const propTypes = {
  router: React.PropTypes.object.isRequired,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObject = {};
    const stateKey = e.target.name;
    stateObject[stateKey] = e.target.value;
    this.setState(stateObject);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
              console.log(err);
            })
            .then(() => {
              this.props.router.push('/');
            });
  }
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <form className="authentication-form" onSubmit={this.handleSubmit}>
          <h3 className="authentication-form__header">Log in</h3>
          <input
            className="authentication-form__first-input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            className="authentication-form__last-input"
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
            Don't have an account?<br /><Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default withRouter(Login);
