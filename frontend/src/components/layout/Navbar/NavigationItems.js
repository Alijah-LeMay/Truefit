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
          to='/training'
          onClick={clicked}
        >
          In Person Training
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/meals'
          onClick={clicked}
        >
          Meal Plans
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/testimonials'
          onClick={clicked}
        >
          Testimonials
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={currentlyActiveStyle}
          to='/contact'
          onClick={clicked}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItems;
