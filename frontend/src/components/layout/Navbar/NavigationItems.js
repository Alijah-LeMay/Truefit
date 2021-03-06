import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const NavigationItems = ({ clicked }) => {
  let currentlyActiveStyle = { backgroundColor: '#6ec1e4', color: 'black' };

  let navItems = [
    { to: '/', name: 'Home' },
    { to: '/training', name: 'In Person Training' },
    { to: '/meals', name: 'Meal Plans' },
    { to: '/testimonials', name: 'Testimonials' },
    { to: '/contact', name: 'Contact Us' },
  ];

  return (
    <>
      {navItems.map((item, idx) => (
        <li key={idx} className={classes.regular_nav_li}>
          <NavLink
            className={classes.wideLink}
            exact
            activeStyle={currentlyActiveStyle}
            onClick={clicked}
            to={item.to}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavigationItems;
