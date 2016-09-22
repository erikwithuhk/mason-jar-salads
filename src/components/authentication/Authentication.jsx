import React from 'react';
import { Link } from 'react-router';

class Authentication extends React.Component {
  render() {
    return (
      <div className="welcome container">
        <h1 className="welcome__page-header">Mason Jar Salads</h1>
        <Link to="/register" >Create an account</Link>
        <Link to="/login" >Log in</Link>
      </div>
    );
  }
}

export default Authentication;
