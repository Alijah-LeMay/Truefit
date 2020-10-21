import React from 'react';
import Radium from 'radium';

const Tr = ({ variant, children, key }) => {
  let rStyle = {
    tr: {
      backgroundColor: '#ccc',
    },
  };
  return (
    <tr key={key} style={rStyle.tr}>
      {children}
    </tr>
  );
};

export default Radium(Tr);
