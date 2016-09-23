import React, { Component } from 'react';
import { Link } from 'react-router';

class Authentication extends Component {
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <div className="welcome__authentication-button-container">
          <Link to="/register" >
            <button className="btn btn--primary">Create an account</button>
          </Link>
          <Link to="/login" >
            <button className="btn btn--secondary">Log in</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Authentication;
