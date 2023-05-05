import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  `;

const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  font-weight: 500;
  font-size: 48px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 1px;

  @media (max-width: 375px) {
    font-size: 24px;
    width: 217px;
    height: 48px;
    left: 35%;
    top: 40%;
    text-align: start;
    width: 200px;
    letter-spacing: 0px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    Height: 17px;
    font-size: 30px;
    width: 250px;
    top: 40%;
  }

  @media (min-width: 481px) and (max-width: 684px) {
      Height: 37px;
      font-size: 36px;
      top: 40%;
  }
  `;

const Image = styled.img`
  width: 86%;
  height: 75%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  filter: brightness(0.65);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 375px) {
    font-size: 24px;
    width: 95%;
    height: 100%;
  }
`;

const Banner = ({ title, image, alt }) => {
  return (
    <BannerWrapper>

         {title && 
         <Title className="banner-title">{ title }</Title>}
         <Image className="banner-image" src={ image } alt={ alt } />
        
    </BannerWrapper>
  );
}

export default Banner;
