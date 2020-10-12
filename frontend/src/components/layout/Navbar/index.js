import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import CenterContainer from '../../utils/CenterContainer';
import banner_white from '../../../assets/banner_white.png';

const Navbar = () => {
  return (
    <CenterContainer>
      <nav className={classes.nav}>
        <div className={classes.headerLogo}>
          <Link to='/'>
            <img
              style={{ width: '250px' }}
              src={banner_white}
              alt='The Web Developers'
            />
          </Link>
        </div>

        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link to='/'>Home</Link>
          </li>
          <li className={classes.li}>
            <Link to='/services'>Services</Link>
          </li>
          <li className={classes.li}>
            <Link to='/our_work'>Our Work</Link>
          </li>

          <li className={classes.liQuote}>
            <Link to='/quote'>Quote</Link>
          </li>
        </ul>
      </nav>
    </CenterContainer>
  );
};

export default Navbar;
