import React from 'react';
import Card from '../Card';
import dataJSON from '../../data.json'; 
import styled from 'styled-components';
import colors from '../../utils/styles/colors'


const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 86%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  background-color: ${ colors.tertiary };
  border-radius: 25px;

  @media (max-width: 375px) {
    width: 100%;
    background-color: white;

  }
  @media (min-width: 376px) and (max-width: 480px) {
    bottom: 60px;
    background-color: white;

  }

  @media (min-width: 481px) and (max-width: 684px) {
    bottom: 60px;
  }
`


const CardContainer = () => {
    return (
      <CardsWrapper className="CardContainer">
        {dataJSON.map((logement) => (
          <Card key={ logement.id } id={ `${ logement.id }` }  title={ logement.title } cover={ logement.cover }/>
        ))}
      </CardsWrapper>
  );
};

export default CardContainer;
