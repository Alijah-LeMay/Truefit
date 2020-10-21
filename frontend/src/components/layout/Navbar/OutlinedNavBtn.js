import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

// Assets

const OutlinedNavBtn = ({ to, content, children }) => {
  let rStyle = {
    li: {
      float: 'left',
      margin: 0,
      padding: 0,
    },
    button: {
      textDecoration: 'none',
      margin: 0,
      padding: 0,
    },
    buttonPara: {
      alignSelf: 'center',
      padding: '10px',
      margin: 'auto 0',
      fontSize: '1.2rem',
      borderRadius: '40px',
      backgroundColor: 'white',
      color: '#333',
      borderWidth: '0px',
      ':hover': {
        color: '#4bb781',
      },
    },
  };
  return (
    <li style={rStyle.li}>
      <Link to={to} style={rStyle.button}>
        <p style={rStyle.buttonPara}>{content ? content : children}</p>
      </Link>
    </li>
  );
};

export default Radium(OutlinedNavBtn);
