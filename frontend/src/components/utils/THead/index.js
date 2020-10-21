import React from 'react';
import Radium from 'radium';

const THead = ({ variant, children }) => {
  let rStyle = {
    THead: {},
  };
  return <thead style={rStyle.THead}>{children}</thead>;
};

export default Radium(TBody);
