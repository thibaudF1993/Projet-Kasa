import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Card = styled.div`
  position: inherit;
  width: 340px;
  height: 340px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 375px) {
    width: 335px;
    height: 255px;
    margin: 10px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    width: 335px;
    height: 285px;
    margin: 15px;
  }

  @media (min-width: 481px) and (max-width: 684px) {
    width: 335px;
    height: 285px;
    margin: 15px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), #FF6060;  opacity: 0.8;
`;

const Title = styled.h2`
position: absolute;
left: 5.88%;
right: 5.88%;
top: 78.82%;
bottom: 5.88%;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
color: white;
width: 300px;

  @media (max-width: 375px) {
    width: 295px;
    height: 52px;
    top: 72%;
  }

  @media (min-width: 376px) and (max-width: 684px) {
    width: 335px;
    height: 285px;
    margin: 15px;
  }
`;

const Cards = ({ title, cover, id }) => {
  return (
    
    <Card>
      <Link to={ `/logement/${ id }` }>
        <BackgroundImage image={ cover } />
        <Overlay />
        <Title> { title } </Title>
      </Link>
    </Card>
  );
};

export default Cards;
