import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Index = () => {
  return (
    <nav styleName="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Index;
