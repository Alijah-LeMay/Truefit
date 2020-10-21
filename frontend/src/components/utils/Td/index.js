import React from 'react';
import Radium from 'radium';

const Td = ({ variant, children, bgColor }) => {
  let rStyle = {
    td: {
      backgroundColor: bgColor ? bgColor : 'white',
      padding: '5px 10px',
    },
  };
  return <td style={rStyle.td}>{children}</td>;
};

export default Radium(Td);
