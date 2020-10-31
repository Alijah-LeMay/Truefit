import React from 'react';
import Radium from 'radium';
// Assets
import banner_white from '../../assets/banner_white.png';
// My Components

const Logo = ({ width }) => {
  let rStyle = {
    image: {
      width: width ? width : '250px',
      '@media (max-width:440px)': {
        width: '150px',
      },
    },
  };
  return (
    <img style={rStyle.image} src={banner_white} alt='The Web Developers' />
  );
};
export default Radium(Logo);
