import React from 'react';
import classes from './Loader.module.css';

const Loader = ({ size }) => {
  const rStyle = {
    Loader: {
      fontSize: size ? size : '10px',
    },
  };
  return (
    <div style={rStyle.Loader} className={classes.Loader}>
      Loading...
    </div>
  );
};

export default Loader;
