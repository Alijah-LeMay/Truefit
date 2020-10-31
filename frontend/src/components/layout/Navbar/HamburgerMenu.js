import React from 'react';
// fontawesome

import classes from './Navbar.module.css';

// My Components
import Backdrop from '../../utils/Backdrop';
import NavigationItems from './NavigationItems';
import Logo from '../../Logo';
import OutlinedNavBtn from './OutlinedNavBtn';

const HamburgerMenu = (props) => {
  return (
    <>
      <div className={classes.hamburger_container} onClick={props.clicked}>
        <i
          className='fas fa-bars'
          style={{ color: '#fff', fontSize: '1.3rem' }}
        ></i>
      </div>
      <Backdrop show={props.showBack} clicked={props.close} />

      <div
        className={
          props.showBack ? classes.sideDrawer_open : classes.sideDrawer_close
        }
      >
        <ul className={classes.drawerlist_container}>
          <NavigationItems clicked={props.close} mobile />
          <OutlinedNavBtn content='Quote' to='/quote' mobile />
        </ul>
        <div className={classes.spacing_container}>
          <div className={classes.logo_container}>
            <Logo width='180px' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
