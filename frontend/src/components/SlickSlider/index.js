import React from 'react';
import Slider from 'react-slick';
import classes from './SlickSlider.module.css';
import Slide from './Slide';

const SlickSlider = ({
  images,
  height,
  slidesToShow,
  dots,
  arrows,
  autoplay,
  speed,
  infinite,
  slidesToScroll,
}) => {
  const settings = {
    infinite: infinite ? infinite : true,
    autoplay: autoplay ? autoplay : true,
    speed: speed ? speed : 700,
    slidesToShow: slidesToShow ? slidesToShow : 4,
    dots: dots ? dots : false,
    arrows: arrows ? arrows : false,
    slidesToScroll: slidesToScroll ? slidesToScroll : 1,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: dots ? dots : false,
          arrows: arrows ? arrows : false,
        },
      },
    ],
  };

  let defaultHeight = height ? `${height}px` : '250px';

  return (
    <div className={classes.slider_container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            height={defaultHeight}
            alt='Site example'
          />
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
