import React from 'react';
import Radium from 'radium';

const TBody = ({ variant, children }) => {
  let rStyle = {
    TBody: {},
  };
  return <tbody style={rStyle.TBody}>{children}</tbody>;
};

export default Radium(TBody);
