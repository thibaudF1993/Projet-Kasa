import React from "react";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer";
import BannerImage from "../../assets/IMG.png";
import styled from 'styled-components';


const BannerContainer = styled.div`
  height: 243px;
  margin-bottom: 50px;

  @media (max-width: 375px) {
    height: 111px;
    margin-bottom: 10px;
  }
`;


const Home = () => {
    return (
      <div>
        <BannerContainer >
          <Banner  
            title="Chez vous, partout et ailleurs"
            image={ BannerImage } alt="Paysage au bord d'une falaise"/>
        </BannerContainer>
        <CardContainer />
      </div>
    );
  };
  
  export default Home;