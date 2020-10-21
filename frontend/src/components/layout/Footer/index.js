import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import CenterContainer from '../../utils/CenterContainer';

let rStyle = {
  // WHEN WORKING WITH RADIUM, THE PROPERTY IS STYLE, NOT CLASSNAME
  bckStrip: {
    height: '10px',
    backgroundColor: '#4BB781',
  },
  background: {
    backgroundColor: 'white',
  },
  innerDiv: {
    marginTop: '40px',
    marginBottom: '30px',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    alignSelf: 'center',
  },
  li: {
    listStyleType: 'none',
    display: 'inline',
    padding: '15px',
  },
  a: {
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
  aHover: {
    display: 'inline',
    color: 'black',
    ':hover': {
      color: '#4BB781',
    },
  },
  copyRight: {
    fontSize: '1.1rem',
    color: 'black',
    fontWeight: 'normal',
    padding: '10px 0',
  },
};

const Footer = () => {
  return (
    <Fragment>
      <div style={rStyle.bckStrip}></div>
      <div style={rStyle.background}>
        <CenterContainer>
          <div style={rStyle.innerDiv}>
            <ul style={rStyle.ul}>
              <li style={rStyle.li}>
                <Link to='/' style={rStyle.a}>
                  <p key='r1' style={rStyle.aHover}>
                    Home
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/services' style={rStyle.a}>
                  <p key='r2' style={rStyle.aHover}>
                    Services
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/ourwork' style={rStyle.a}>
                  <p key='r3' style={rStyle.aHover}>
                    Our Work
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/blog' style={rStyle.a}>
                  <p key='r4' style={rStyle.aHover}>
                    Blog
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/privacy_policy' style={rStyle.a}>
                  <p key='r5' style={rStyle.aHover}>
                    Privacy Policy
                  </p>
                </Link>
              </li>
            </ul>
            <h3 style={rStyle.copyRight}>Copyright &copy; 2020 LemaTech LLC</h3>
          </div>
        </CenterContainer>
      </div>
    </Fragment>
  );
};

export default Radium(Footer);
