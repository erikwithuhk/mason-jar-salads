import React, { Component } from 'react';
import { Link } from 'react-router';

class Authentication extends Component {
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <div className="welcome__authentication-button-container">
          <button className="btn btn--primary">
            <Link to="/register" >Create an account</Link>
          </button>
          <button className="btn btn--secondary">
            <Link to="/login" >Log in</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Authentication;
