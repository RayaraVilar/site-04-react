import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {

  const sliderData = [
    {img: './imagens/1.png', country: 'Brasil'},
    {img: './imagens/2.png', country: 'Portugal'},
    {img: './imagens/3.png', country: 'Tailândia'},
    {img: './imagens/4.png', country: 'França'},
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div className="slider-text">
        <span>Take a Glimpse Into The Beautiful Country Of:</span>
        <span className="country-name">{sliderData[currentImageIndex].country}</span>
      </div>
      <img src={sliderData[currentImageIndex].img} alt="Slider Image" />
    </div>
  );
};

export default Slider;