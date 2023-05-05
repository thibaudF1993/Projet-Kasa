import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors'


const Layout = styled.div`
  color: ${ colors.primary };
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-height: 788px) {
    min-height: 628px;
  }

  @media (min-height: 916px) {
    min-height: 809px;
  }

  @media (min-height: 1300px) {
    min-height: 997px;
  }
`

const Title = styled.div`
  font-weight: 900;
  font-size: 288px;
  line-height: 142.6%;
  letter-spacing: 10px;

  @media (max-width: 375px) {
    font-size: 96px;
    margin-top: 120px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    font-size: 150px;
    margin-top: 0;
  }

  @media (min-width: 481px) and (max-width: 684px) {
    font-size: 218px;

  }
`

const Error = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  margin-bottom: 150px;
  text-align: center;
  letter-spacing: 1px;
  word-spacing: 3px;


  @media (max-width: 375px) {
    font-size: 18px;
    width: 260px;
    margin-top: 0;
    margin-bottom: 130px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 481px) and (max-width: 684px) {
    font-size: 30px;
  }
`

const StyledLink = styled(Link)`
  color: ${ colors.primary };
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 142.6%;
  text-decoration-line: underline;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`


function ErrorPage() {
  return (
    <Layout>
      <Title>404</Title>
      <Error>Oups! La page que vous demandez n'existe pas.</Error>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </Layout>
  );
}

export default ErrorPage;