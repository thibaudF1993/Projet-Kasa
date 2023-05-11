import React, { useState } from "react";
import styled from 'styled-components';


const SlideshowWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 450px;

  @media (max-width: 375px) {
    height: 255px;
    margin-bottom: 10px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    height: 300px;
  }
  `
  
  const PictureContainer = styled.div`
  width: 100%;
  position: absolute;

  @media (max-width: 375px) {
    height: 255px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    height: 282px;
  }
  `

const Pictures = styled.img`
  width: 92%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  position: absolute;

  @media (max-width: 375px) {
    height: 255px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    height: 282px;
  }
`

const Overlay = styled.div`
  width: 92%;
  height: 415px;
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.3;
  position: absolute;
  border-radius: 25px;

  @media (max-width: 375px) {
    height: 255px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    height: 282px;
  }
`

const BulletPoint = styled.div`
  position: absolute;
  top: 395px;
  bottom: 65px;
  color: white;
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  left: 42%;

  @media (max-width: 560px) {
    display: none;
  }
`

const ArrowsContainer = styled.div`
  position: fixed;
  top: 170px;
  display: flex;
  justify-content: space-between;
  width: 92%;

  @media (min-width: 376px) and (max-width: 560px) {
    top: 115px;
  }

  @media (max-width: 375px) {
    top: 115px;
  }
`
const LeftArrow = styled.img`
  position: relative;
  left: 23px;

  @media (max-width: 375px) {
  width: 12px;
  height: 20px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    width: 20px;
    height: 35px;
  }
`
const RightArrow = styled.img`
  position: relative;
  right: 23px;

  @media (max-width: 375px) {
    width: 12px;
    height: 20px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    width: 20px;
    height: 35px;
  }
`


const Slideshow = ({ images, arrows }) => {

  // Utilisation du hook useState pour stocker l'index de l'image en cours
  const [currentImage, setCurrentImage] = useState(0);

  // Fonction pour passer à l'image précédente
  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  // Afficher le bulletpoint et les flèches si nombre d'images > à 1
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