import React from 'react';
import { Link } from 'react-router-dom';

import Radium from 'radium';

import { titleCase, elipsesText } from '../functions';

const ArticleContainer = ({ category, title, imageLOC, description, link }) => {
  let updatedTitle = titleCase(title);

  console.log(updatedTitle);
  let rStyle = {
    container: {
      width: '275px',
      padding: '20px',
    },
    image: {
      width: '100%',
    },
    title: {
      margin: '0 0 10px 0',
    },
    description: {
      wordWrap: 'break-word',
      width: '100%',
      padding: 0,
      margin: 0,
      maxHeight: '60px',
    },
    linkContainer: {
      margin: '30px',
    },
    link: {
      textDecoration: 'none',
      color: '#3D5AAF',
      position: 'absolute',
      margin: '-20px 0 0 50px',
    },
  };

  return (
    <div style={rStyle.container}>
      <img style={rStyle.image} src={imageLOC} alt={updatedTitle} />
      <h2 style={rStyle.title}>{updatedTitle}</h2>
      <p style={rStyle.description}>{elipsesText(description, 100)}</p>
      <div style={rStyle.linkContainer}>
        <Link style={rStyle.link} to={link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Radium(ArticleContainer);
