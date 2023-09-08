import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.png';

const Navigation = () => (
  <div className="navigation">
    <div className="nav-items">
      <h2 className="title">Bookstore CMS</h2>
      <Link className="pages" to="/">Books</Link>
      <Link className="pages" to="/categories">Categories</Link>
    </div>
    <img src={Profile} alt="Account user" width="22" height="22" />
  </div>
);

export default Navigation;
