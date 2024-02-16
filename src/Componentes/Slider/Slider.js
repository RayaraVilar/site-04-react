import React, { useState, useEffect } from 'react';
import './Slider.css';
import{FaUser} from 'react-icons/fa';
import{FaGlobe} from 'react-icons/fa';

const Slider = () => {

  const sliderData = [
    {img: './imagens/1.png', country: 'Brasil', population:'214M', territory: '8.510.000 km²'},
    {img: './imagens/2.png', country: 'Portugal', population:'10M', territory: '92.152km²'},
    {img: './imagens/3.png', country: 'Tailândia', population:'71M', territory: '513.120 km²'},
    {img: './imagens/4.png', country: 'França', population:'67M', territory: '643.801 km²'},
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
        <span className='botao-slider'><a><button className='botao-ps'>Go there</button></a></span>
      </div>
      <div className='box-slider'>
        <div className='info-slider'>
            <div className='infos'>
                <div className='icone'>
                    <FaUser/>
                </div>
                <div className='in-pop'>
                    <h1 className='titulo-box-slider'>
                        Population
                    </h1>
                    <span className='numeros'>
                        {sliderData[currentImageIndex].population}
                    </span>
                 </div>
            </div>
        </div>
        <div className='infos'>
                <div className='icone'>
                    <FaGlobe/>
                </div>
          <div className='info-slider'>
              <h1 className='titulo-box-slider'>
                  Territory
              </h1>
              <span className='numeros'>
                  {sliderData[currentImageIndex].territory}
              </span>
          </div>
        </div>
        <div className='botao-box-slider'>
            <a href='#'><button className='b-botao-box-slider'>Explore More</button></a>
        </div>
      </div>
      <img src={sliderData[currentImageIndex].img} alt="Slider Image" />
    </div>
  );
};

export default Slider;