import React from 'react'
import classes from './Location.module.css'
const Location = ({ width, height, src, title }) => {
  const iWidth = width ? width : '100%'
  const iHeight = height ? height : '250px'
  return (
    <div className={classes.location_container}>
      <iframe
        src={src}
        width={iWidth}
        height={iHeight}
        frameBorder='0'
        allowFullScreen
        title={title}
        // aria-hidden='false'
        // tabindex='0'
      ></iframe>
    </div>
  )
}

export default Location
