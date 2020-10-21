import React from 'react';
import classes from './SlickSlider.module.css';

const Slide = ({ image, alt }) => {
  return (
    <div>
      <img src={image} className={classes.image} alt={alt} />
    </div>
  );
};

export default Slide;
