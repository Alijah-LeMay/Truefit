import React from 'react';
import Radium from 'radium';

const Th = ({ variant, children }) => {
  let rStyle = {
    th: {
      backgroundColor: '#ccc',
    },
  };
  return <th style={rStyle.th}>{children}</th>;
};

export default Radium(Th);
