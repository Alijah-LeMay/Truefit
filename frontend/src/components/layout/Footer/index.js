import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import CenterContainer from '../../utils/CenterContainer'

const Footer = ({ bgColor, fontColor, position }) => {
  let rStyle = {
    // WHEN WORKING WITH RADIUM, THE PROPERTY IS STYLE, NOT CLASSNAME
    masterContainer: {
      position: position ? position : 'relative',
      bottom: 0,
      width: '100%',
    },
    bckStrip: {
      height: '10px',
      backgroundColor: '#ccc',
    },
    innerDiv: {
      paddingTop: '40px',
      paddingBottom: '30px',
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
      color: fontColor ? fontColor : 'black',
      ':hover': {
        color: '#6ec1e4',
      },
      '@media (max-width:440px)': {
        fontSize: '0.9rem',
      },
    },
    copyRight: {
      fontSize: '1.1rem',
      color: fontColor ? fontColor : 'black',
      fontWeight: 'normal',
      padding: '10px 0',

      '@media (max-width:440px)': {
        fontSize: '0.9rem',
      },
    },
  }

  return (
    <div style={rStyle.masterContainer}>
      <div style={rStyle.bckStrip}></div>
      <CenterContainer bgColor={bgColor}>
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
  )
}

export default Radium(Footer)
