import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Carrousel = ({ images, size }) => {
  const slideAnimation = keyframes`${(props) => props.values}`;

  const CarouselImage = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    left: ${(props) => props.startingPos};
    background-color: ${(props) => props.color};
    animation-name: ${(props) => props.values};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  `;

  CarouselImage.defaultProps = {
    startingPos: '0',
  };

  const getKeyframes = (index) =>
    keyframes`${15 * (index + 1)}% {transform: translateX(${100 * index}px);} ${
      15 * (index + 1) + 5
    }% {transform: translateX(${100 * index}px);}`;

  const getValues = (index) => {
    return `${15 * (index + 1)}% {transform: translateX(${100 * index}px);} ${
      15 * (index + 1) + 5
    }% {transform: translateX(${100 * index}px);}`;
  };
  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        overFlow: 'hidden',
        height: '100px',
      }}
    >
      {images.map((image, index) => {
        console.log(`values for image ${image}${index} = ${getValues(index)}`);
        return (
          <CarouselImage
            key={index}
            src={image}
            startingPos={`${100 * index}px`}
            values={getKeyframes(index)}
          />
        );
      })}
    </div>
  );
};

export default Carrousel;
