import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

const MyButton = ({
  padding,
  fontSize,
  bgColor,
  content,
  color,
  bgHoverColor,
  hoverColor,
  styleVariant,
  variant,
  to,
  children,
  dir,
}) => {
  let direction;
  if (dir === 'left') {
    direction = 'flex-start';
  }
  if (dir === 'right') {
    direction = 'flex-end';
  }
  let rStyle = {
    containerDiv: { alignSelf: direction ? direction : 'center' },
    //  for buttons that do not contain an inner P
    submitBtn: {
      border: 'none',
      textDecoration: 'none',
      color: color ? color : '#333',
      padding: padding ? padding : '15px 30px',
      backgroundColor: 'white',
      borderRadius: '40px',
      fontSize: fontSize ? fontSize : '1.2rem',
      boxShadow:
        '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 -2px 5px 0 rgba(0, 0, 0, 0.19)',
      display: 'inline-block',
      ':hover': {
        backgroundColor: bgHoverColor ? bgHoverColor : 'rgb(131, 126, 126)',
        color: hoverColor ? hoverColor : 'white',
      },
    },
    button: {
      textDecoration: 'none',
    },
    // if the button contains an inner P
    buttonPara: {
      color: color ? color : '#333',
      padding: padding ? padding : '15px 30px',
      backgroundColor: 'white',
      borderRadius: '40px',
      fontSize: fontSize ? fontSize : '1.2rem',
      boxShadow:
        '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 -2px 5px 0 rgba(0, 0, 0, 0.19)',
      display: 'inline-block',
      ':hover': {
        backgroundColor: bgHoverColor ? bgHoverColor : 'rgb(131, 126, 126)',
        color: hoverColor ? hoverColor : 'white',
      },
    },
  };

  if (styleVariant)
    if (styleVariant === 'clear') {
      rStyle = {
        containerDiv: { alignSelf: direction && direction },

        button: {
          textDecoration: 'none',
        },
        buttonPara: {
          display: 'inline-block',
          padding: padding ? padding : '15px',
          height: 'auto',
          fontSize: fontSize ? fontSize : '1.2rem',
          borderRadius: '40px',
          backgroundColor: bgColor ? bgColor : 'white',
          color: color ? color : '#333',
          borderWidth: '0px',
          ':hover': {
            color: hoverColor ? hoverColor : 'white',
          },
        },
      };
    }
  //  AS DEFAULT
  //  React Router Button
  //  INSIDE LINKS
  let template = (
    <div style={rStyle.containerDiv}>
      <Link to={to} style={rStyle.button}>
        <p key='r2' style={rStyle.buttonPara}>
          {content ? content : children}
        </p>
      </Link>
    </div>
  );
  //  variant
  //  <a> link button
  //  OUTSIDE LINKS
  if (variant === 'a') {
    template = (
      <div style={rStyle.containerDiv}>
        <a style={rStyle.button} href={to}>
          <p key='r2' style={rStyle.buttonPara}>
            {content ? content : children}
          </p>
        </a>
      </div>
    );
  }
  //  variant
  //  submit button variant
  //  FOR FORMS
  if (variant === 'submit') {
    template = (
      <button style={rStyle.submitBtn} type='submit'>
        {content ? content : children}
      </button>
    );
  }
  // variant
  //  function button
  //  ONCLICK HANDLERS
  if (variant === 'func') {
    template = (
      <button style={rStyle.submitBtn} onClick={to}>
        {content ? content : children}
      </button>
    );
  }
  return template;
};

export default Radium(MyButton);
