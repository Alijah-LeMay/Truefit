import React from 'react';
import Radium from 'radium';

const Card = ({
  height,
  padding,
  margin,
  variant,
  children,
  align,
  radius,
}) => {
  let alignment = 'center';
  if (align === 'left') {
    alignment = 'left';
  } else if (align === 'end') {
    alignment = 'end';
  } else if (align === 'right') {
    alignment = 'right';
  }
  let rStyle = {
    display: 'flex',
    textAlign: alignment,
    flexDirection: 'column',
    alignItems: alignment,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
    padding: padding ? padding : '30px 16px',
    flex: 1,
    height: height && height,
    borderRadius: radius ? radius : '20px',
    margin: margin ? margin : '20px',
    ':hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  };
  if (variant === 'outline') {
    rStyle = {
      textAlign: alignment,
      display: 'flex',
      flexDirection: 'column',
      alignItems: alignment,
      backgroundColor: 'white',
      justifyContent: 'space-around',
      border: '1px solid #333',
      padding: padding ? padding : '30px 16px',
      flex: 1,
      height: height && height,
      borderRadius: radius ? radius : '20px',
      margin: margin ? margin : '20px',
    };
  }

  return <div style={rStyle}>{children}</div>;
};

export default Radium(Card);
