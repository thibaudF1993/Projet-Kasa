import React, { useState } from 'react';
import Open from "../../assets/open.png"
import Closed from "../../assets/closed.png"
import styled from 'styled-components';
import colors from '../../utils/styles/colors'


const WrapperCollapse = styled.div`
  margin-bottom: 25px;

  @media (max-width: 375px) {
    transform: translateX(15%);
  }

  @media (min-width: 376px) and (max-width: 480px) {
    transform: translateX(16%);
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
  // width: 100%;
  font-weight: 400;
  line-height: 142.6%;
  background-color: ${ colors.tertiary };
  border-radius: 5px;
  padding: 15px;

  @media (max-width: 375px) {
    font-size: 12px;
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

const Collapse = ({ title, content, customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperCollapse style={ customStyle }>
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
