import React, { useState } from 'react';
import Open from "../../assets/open.png"
import Closed from "../../assets/closed.png"
import styled from 'styled-components';
import colors from '../../utils/styles/colors'


const WrapperCollapse = styled.div`
  margin-bottom: 25px;

  @media (min-width: 830px){
    min-width: 48%;
    max-width: 71%;
    margin-right: 30px;
  }
`

const Button = styled.div`
  background-color: ${ colors.primary };
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  height: 46px;
  
  @media (max-width: 375px) {
    font-size: 13px;
    height: 30px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    font-size: 19px;
  }
}
`

const Content = styled.div`
  color: ${ colors.primary };
  font-weight: 400;
  line-height: 142.6%;
  background-color: ${ colors.tertiary };
  border-radius: 5px;
  padding: 15px;
  min-height: 252px;
  letter-spacing: 1px;

  @media (max-width: 375px) {
    font-size: 12px;
    min-height: auto;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    font-size: 18px;  
  }
`
const Icon = styled.img`
  width: 21px;

  @media (max-width: 375px) {
    width: 16px;
  }
`

const Collapse = ({ title, content }) => {

  // Utilisation de useState pour la gestion de l'état du composant
  const [isOpen, setIsOpen] = useState(false);

  // Fonction qui permet de basculer l'état de isOpen
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperCollapse>
      <Button onClick={toggleCollapse}>
        { title }
        {isOpen ? (
          <Icon src= { Open } alt="Cacher" />
        ) : (
          <Icon src= { Closed } alt="Afficher" />
        )}
      </Button>

      {isOpen && (
        <Content>
          { content }
        </Content>
      )}
    </WrapperCollapse>
  );
};

export default Collapse;
