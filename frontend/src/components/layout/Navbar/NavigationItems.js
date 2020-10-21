import React from 'react';
import { NavLink } from 'react-router-dom';
// import classes from './Navbar.module.css';

const NavigationItems = ({ clicked, mobile }) => {
  let currentlyActiveStyle = { color: '#4bb781' };
  if (mobile) {
    currentlyActiveStyle = { color: '#3d5aaf' };
  }
  return (
    <>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/'
          onClick={clicked}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/services'
          onClick={clicked}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/ourwork'
          onClick={clicked}
        >
          Our Work
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItems;
