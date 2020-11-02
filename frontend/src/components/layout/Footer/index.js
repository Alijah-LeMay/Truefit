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
    maxWidth: '100%',
    listStyleType: 'none',
    margin: 0,
    alignSelf: 'center',
    paddingInlineStart: 0,
  },
  li: {
    listStyleType: 'none',
    display: 'inline-flex',
    padding: '5px 10px',
  },
  a: {
    textDecoration: 'none',
  },
  aHover: {
    display: 'inline',
    color: 'black',
    ':hover': {
      color: '#4BB781',
    },
    '@media (max-width:440px)': {
      fontSize: '0.9rem',
    },
  },
  copyRight: {
    fontSize: '1.1rem',
    color: 'black',
    fontWeight: 'normal',
    padding: '10px 0',

    '@media (max-width:440px)': {
      fontSize: '0.9rem',
    },
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
                <Link to='/training' style={rStyle.a}>
                  <p key='r2' style={rStyle.aHover}>
                    In Person Training
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/meals' style={rStyle.a}>
                  <p key='r3' style={rStyle.aHover}>
                    Meal Plans
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/testimonials' style={rStyle.a}>
                  <p key='r4' style={rStyle.aHover}>
                    Testimonials
                  </p>
                </Link>
              </li>
              <li style={rStyle.li}>
                <Link to='/contact' style={rStyle.a}>
                  <p key='r5' style={rStyle.aHover}>
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
            <h3 style={rStyle.copyRight}>&copy; 2020 TrueFit </h3>
          </div>
        </CenterContainer>
      </div>
    </Fragment>
  );
};

export default Radium(Footer);
