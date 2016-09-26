import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  userLoggedIn: React.PropTypes.bool,
  username: React.PropTypes.string,
  signOut: React.PropTypes.func,
};

class Header extends Component {
  loggedInLinks() {
    if (this.props.userLoggedIn) {
      return (
        <nav className="top-nav__sub-nav">
          <Link to="/" >Browse recipes</Link>
          <Link to={`/users/${this.props.username}`} >My recipes</Link>
          <Link to="/" onClick={this.props.signOut}>Sign out</Link>
        </nav>
      );
    }
    return (
      <nav className="top-nav__sub-nav">
        <Link to="/login" >Log in</Link>
      </nav>
    );
  }
  render() {
    return (
      <header>
        <nav className="top-nav">
          <h1 className="top-nav__brand">Mason Jar Salads</h1>
          {this.loggedInLinks()}
        </nav>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
