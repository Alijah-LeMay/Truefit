import React from 'react';
import Radium from 'radium';

const CenterContainer = ({
  bgVariant,
  bgPadding,
  bgColor,
  children,
  bgImageURL,
  bgHeight,
  bgImageAlt,
  Horizontal,
  justify,
  width,
}) => {
  let direction = 'column';
  if (Horizontal) {
    direction = 'row';
  }
  let rStyle = {
    background: {
      backgroundColor: bgColor ? bgColor : 'white',
      padding: bgPadding && bgPadding,
    },
    container: {
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify && justify,
      textAlign: 'center',
      padding: 0,
      maxWidth: '100%',
      width: width ? width : '1200px',
      margin: 'auto',
    },
  };
  if (bgVariant === 'image') {
    rStyle = {
      imageContainer: {
        position: 'relative',
        height: bgHeight ? bgHeight : 'auto',
      },
      background: {
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        maxHeight: bgHeight ? bgHeight : 'auto',
        zIndez: '-10',
      },
      container: {
        overFlow: 'hidden',
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify && justify,
        textAlign: 'center',
        position: 'relative',
        padding: bgPadding && bgPadding,
        maxWidth: '100%',
        width: width ? width : '1200px',
        margin: 'auto',
        zIndex: '10',
      },
    };
  }
  let template = (
    <div style={rStyle.background}>
      <div style={rStyle.container}>{children}</div>
    </div>
  );

  if (bgVariant === 'image') {
    template = (
      <div style={rStyle.imageContainer}>
        <img style={rStyle.background} src={bgImageURL} alt={bgImageAlt} />
        <div style={rStyle.container}>{children}</div>
      </div>
    );
  }
  return template;
};

export default Radium(CenterContainer);
