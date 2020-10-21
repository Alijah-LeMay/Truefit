import React from 'react';
import Radium from 'radium';

const Table = ({ variant, children, fixed }) => {
  let rStyle = {
    table: {
      backgroundColor: '#ccc',
      tableLayout: fixed && 'fixed',
    },
  };
  return <table style={rStyle.table}>{children}</table>;
};

export default Radium(Table);
