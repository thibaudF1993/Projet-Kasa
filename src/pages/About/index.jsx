import React from "react";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import styled from "styled-components";


const BannerContainer = styled.div`
  height: 223px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 74%;
  transform: translateX(31%);
  font-size: 24px;
  margin-bottom: 25px;

  @media (max-width: 375px) {
    transform: translateX(19%);
  }

  @media (max-width: 830px) {
    width: 70%;
    transform: translateX(20%);
  }

  @media (min-height: 788px) {
    min-height: 355px;
  }

  @media (min-height: 916px) {
    min-height: 724px;
  }
` 

const About = () => {
    return (
      <div>
        <BannerContainer>
          <Banner image={BannerImage} alt="Paysage de montagne avec forêt" />
        </BannerContainer>
        <Container>
          <Collapse
            title= "Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
          <Collapse 
            title= "Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Collapse 
            title= "Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <Collapse 
            title= "Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </Container>
      </div>
    );
  };
  
  export default About;