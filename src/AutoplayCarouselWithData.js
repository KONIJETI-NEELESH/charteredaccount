import React, { useState, useEffect } from 'react';
import './style.css';

const AutoplayCarouselWithData = ({ carouselData, autoplayInterval }) => {
  const div = document.getElementsByClassName('img-container');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, autoplayInterval);
    return () => clearInterval(interval);
  }, [currentImageIndex, autoplayInterval]);

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + carouselData.length) % carouselData.length;
    for(let divs of div){
        divs.style.transition = "opacity 1s ease-in-out";
    }
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % carouselData.length;
    setCurrentImageIndex(newIndex);
  };

  const currentData = carouselData[currentImageIndex];

  return (
    <div className="autoplay-carousel-with-data">
      <button onClick={goToPreviousImage} className='previous-btn'><h1 className='previous'>&#60;</h1></button>
      <div className="carousel-content">
        <img
          src={currentData.image}
          width="100%"
          height="125%"
          alt="Carousel Image"
          className='img-container'
        />
        <div className="data-container">
          <h1 className='carousel-h1' dangerouslySetInnerHTML={{ __html: currentData.title.replace(/\n/g, '<br/>') }}></h1>
        </div>
      </div>
      <button onClick={goToNextImage} className='next-btn'><h1 className='next'>&#62;</h1></button>
    </div>
  );
};

export default AutoplayCarouselWithData;
