import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  userLoggedIn: React.PropTypes.bool,
  username: React.PropTypes.string,
};

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="top-nav">
          <h1 className="top-nav__brand">Mason Jar Salads</h1>
          <nav className="top-nav__sub-nav">
            <Link to="/" >All recipes</Link>
            <Link to={`/${this.props.username}`} >My recipes</Link>
            <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
          </nav>
        </nav>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
