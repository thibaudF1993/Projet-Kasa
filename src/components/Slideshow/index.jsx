import React, { useState } from "react";
import styled from 'styled-components';


const SlideshowWrapper = styled.div`
  width: 100%;
  position: relative;
  `
  
  const PictureContainer = styled.div`
  width: 100%;
  position: absolute;
  `

const Pictures = styled.img`
  width: 86%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  position: absolute;
`

const Overlay = styled.div`
  width: 86%;
  height: 415px;
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.3;
  position: absolute;
  border-radius: 25px;
`

const BulletPoint = styled.div`
  position: absolute;
  top: 380px;
  bottom: 65px;
  color: white;
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  left: 42%;
`

const ArrowsContainer = styled.div`
  position: fixed;
  bottom: 410px;
  display: flex;
  justify-content: space-between;
  width: 86%;
`
const LeftArrow = styled.img`
  position: relative;
  left: 23px;
`
const RightArrow = styled.img`
  position: relative;
  right: 23px;

`


const Slideshow = ({ images, arrows }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const showBulletAndArrows = images.length > 1;


  return (

    <SlideshowWrapper className="slideshow">

      <PictureContainer className="slideshow__image-container">
        <Pictures src={images[currentImage]} alt="Slideshow" className="slideshow__image" />
        <Overlay />
        {showBulletAndArrows && 
          <BulletPoint className="slideshow__bullet-point">{`${currentImage + 1} / ${images.length}`}</BulletPoint>}
      </PictureContainer>

      {showBulletAndArrows && (
        <ArrowsContainer className="slideshow__arrow-container">
          <LeftArrow
            src={arrows.leftArrow} alt="Previous" className="slideshow__arrow slideshow__arrow--left"
            onClick={handlePrev}
          />
          <RightArrow
            src={arrows.rightArrow} alt="Next" className="slideshow__arrow slideshow__arrow--right"
            onClick={handleNext}
          />
        </ArrowsContainer>
      )}
    </SlideshowWrapper>
  );
};

export default Slideshow;