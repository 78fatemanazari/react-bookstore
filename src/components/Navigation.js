import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <Link to="/">Home</Link>
    <Link to="/categories">Categories</Link>
  </div>
);

export default Navigation;
