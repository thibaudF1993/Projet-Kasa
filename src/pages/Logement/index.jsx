import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import dataJSON from '../../data.json'; 
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import Slideshow from "../../components/Slideshow";
import styled from 'styled-components';
import Collapse from "../../components/Collapse"
import FilledStar from "../../assets/Rating_full.png";
import EmptyStar from "../../assets/Rating_empty.png";
import colors from "../../utils/styles/colors";


const LogementContainer = styled.div`
  width: 92%;
  transform: translateX(8%);

  @media (min-height: 1179px) {
    min-height: 809px;
  }

  @media (min-height: 1179px) and (max-height: 1400px){
    min-height: 995px;
  }
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  color: ${ colors.primary };
  margin-top: 0px;
  margin-bottom: 5px;
   
  @media (max-width: 375px) {
    font-size: 18px;
  }
  
  @media (min-width: 376px) and  (max-width: 639px) {
    font-size: 26px;
  }

  @media (max-width: 754px) {
    width: 92%;
  }
  `

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: ${ colors.primary };

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 376px) and  (max-width: 639px) {
    font-size: 16px;
  }
`

const Tags = styled.span`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  background: ${ colors.primary };
  border-radius: 10px;
  margin-right: 10px;
  width: 126px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 375px) {
    width: 84px;
    font-size: 10px;
    margin-bottom: 10px;
    height: 18px;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91%;
  align-items: center;

  @media (max-width: 754px) {
    display: initial;
  }
`

const Rating = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 375px) {
    display: initial;
  }
`

const Stars = styled.img`
  margin-left: 10px;

  @media (max-width: 375px) {
    width: 13px;
    height: 13px;
    margin-left: 5px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    margin-left: 5px;
    width: 16px;
    height: 16px;
  }
`

const Host = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const HostName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;/
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: ${ colors.primary };
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
    font-size: 12px;
  }

  @media (min-width: 376px) and (max-width: 560px) {
    font-size: 16.5px;
    width: 70px;
  }
`

const HostPicture = styled.img`
  border-radius: 40px;
  width: 64px;
  height: 64px;

  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`

const RatingHostContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 35px;

  @media (max-width: 375px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 92%;
    margin-bottom: 0px;
  }

  @media (min-width: 376px) and (max-width: 754px) {
    justify-content: inherit;
    flex-direction: row;
    width: 92%;
    align-items: center;
  }
`

const CollapseContainer = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 18px;

  @media (max-width: 375px) {
    display: inherit;
  }

  @media (min-width: 376px) and (max-width: 830px) {
    display: inherit;
  }
`

const EquipmentList =styled.p`
  margin: 0;
`

function Logement() {

  // On récupère l'URL de la page
  const pathname = window.location.pathname;

  // On extrait l'ID du logement depuis l'URL
  const logementId = pathname.split('/logement/')[1];

  // On cherche le logement correspondant dans la base de données
  const logement = dataJSON.find((logement) => logement.id === logementId);

  // On déclare une constante qui utilise le hook useNavigate
  const navigate = useNavigate();

  // On utilise le hook UseEffect pour vérifier si le logement existe 
  useEffect(() => {
    if (!logement) {
      // Si le logement n'existe pas, on navigue vers la page d'erreur, 
      // on render le contenu du composant normalement si l'élément existe.
      navigate('/error');
    }
  }, [logement, navigate]);

  // Si le logement n'existe pas, on ne retourne rien
  if (!logement) {
    return null;
  }

  // Fonction renvoyant le bon nombre d'étoiles sur 5
  const getStars = (rating) => {
    const maxRating = 5; // Le nombre maximum d'étoiles
    const filledStars = Math.round(rating); // Le nombre d'étoiles remplies, arrondi au nombre entier le plus proche
    const emptyStars = maxRating - filledStars; // Le nombre d'étoiles vides
    const starImages = []; // On crée un tableau qui va contenir les images des étoiles

    // On crée des images pour les étoiles remplies
    for (let i = 0; i < filledStars; i++) {
      starImages.push(<Stars key={ `filled-${ i }` } src={ FilledStar } alt="Filled star" />);
    }

    // On crée des images pour les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      starImages.push(<Stars key={ `empty-${ i }` } src={ EmptyStar } alt="Empty star" />);
    }

    // On renvoie l'array
    return starImages;
  };

  // On retourne la page logement avec toutes les informations
  return (

    <LogementContainer className="logement-container">

      <Slideshow images={ logement.pictures } arrows={{ leftArrow, rightArrow }} />

      <Wrapper className="title-rating-host-wrapper">

        <div key={ logement.id } className="title-location-tags-container">

          <Title>{ logement.title }</Title>
          <Location>{ logement.location }</Location>
          <TagsContainer>
          {logement.tags.map((tag, index) => (
            <Tags key={ `tag-${ index }`}>{ tag }</Tags>
          ))}
          </TagsContainer>

        </div>

        <RatingHostContainer className="rating-host-container">

          <Rating>{getStars(logement.rating)}</Rating>
          <Host>

            <HostName>{ logement.host.name }</HostName>
            <HostPicture src={ logement.host.picture } alt="Visage de l'hôte"></HostPicture>

          </Host>
        </RatingHostContainer>

      </Wrapper>

      <CollapseContainer>
        <Collapse
          title="Description"
          content={ logement.description }
          className="collapse-description"
        />
        <Collapse
          title="Equipements"
          content={ logement.equipments.map((equipment, index) => (
            <EquipmentList key={`equipment-${ index }`}>
              { equipment }
            </EquipmentList>
          ))}
          className="collapse-equipments"
        />
      </CollapseContainer>


    </LogementContainer>
  );
}

export default Logement;
