import React from 'react';
import Radium from 'radium';
import classes from './ImageBanner.module.css';
import CenterContainer from '../CenterContainer';

const ImageBanner = ({
  imageLOC,
  label,
  altText,
  bgOpacity,
  opacity,
  bgColor,
}) => {
  let bgColorOpacity = `rgba(0,0,0,0)`;
  if (bgOpacity) {
    bgColorOpacity = `rgba(0,0,0,${opacity})`;
  }
  let rStyle = {
    container: {
      maxWidth: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundColor: bgColor ? bgColor : 'white',
    },
    image: {
      height: '400px',
      width: '100%',
      objectFit: 'cover',
    },
    label: {
      position: 'absolute',
      top: '50%',
      margin: '0 0 0 20px',
      fontSize: '2.5rem',
      color: 'white',
      zIndex: 1,
    },
    opaque: {
      position: 'absolute',
      backgroundColor: bgColorOpacity,
      width: '100%',
      height: '99%',
      top: 0,
    },
  };
  let template = (
    <div style={rStyle.container}>
      <h1 style={rStyle.label}>{label}</h1>
      <img src={imageLOC} style={rStyle.image} alt={altText} />
    </div>
  );
  if (bgOpacity) {
    template = (
      <div style={rStyle.container}>
        <CenterContainer>
          <h1 className={classes.label}>{label}</h1>
        </CenterContainer>

        <img src={imageLOC} style={rStyle.image} alt={altText} />
        <div style={rStyle.opaque}></div>
      </div>
    );
  }
  return template;
};

export default Radium(ImageBanner);
