import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png';

const Navigation = () => {
  const navLinkStyles = ({ isActive }) => ({
    opacity: isActive ? 1 : 0.5,
  });
  return(
  <div className="navigation">
    <div className="nav-items">
      <h2 className="title">Bookstore CMS</h2>
      <NavLink className="pages" style={navLinkStyles} to="/">BOOKS</NavLink>
      <NavLink className="pages" style={navLinkStyles} to="/categories">CATEGORIES</NavLink>
    </div>
    <img src={Profile} alt="Account user" width="22" height="22" />
  </div>
);
  };

export default Navigation;
