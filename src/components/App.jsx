import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <Link to="/register" >Register</Link>
      {props.children}
    </div>
  );
};

export default App;
