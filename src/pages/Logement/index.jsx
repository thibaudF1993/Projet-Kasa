import React from "react";
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
`

const TitleContainer = styled.div`

`

const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  color: ${ colors.primary };
  margin-top: 0px;
  margin-bottom: 5px;
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: ${ colors.primary };

`

const Tags = styled.p`
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
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 93%;
`

const Rating = styled.div`
  display: flex;
  justify-content: end;
`

const Host = styled.div`
  display: flex;
`

const HostName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;/
  display: flex;
  align-items: flex-end;
  text-align: right;
`

const HostPicture = styled.img`

`

const RatingHostContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 25px;

`

const CollapseContainer = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
`
const EquipmentList = styled.li`
  list-style-type: none;
`

function Logement() {

  const pathname = window.location.pathname;
  const logementId = pathname.split('/logement/')[1];
  const logement = dataJSON.find((logement) => logement.id === logementId);

  const getStars = (rating) => {
    const maxRating = 5;
    const filledStars = Math.round(rating);
    const emptyStars = maxRating - filledStars;
    const starImages = [];

    for (let i = 0; i < filledStars; i++) {
      starImages.push(<img key={ `filled-${ i }` } src={ FilledStar } alt="Filled star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      starImages.push(<img key={ `empty-${ i }` } src={ EmptyStar } alt="Empty star" />);
    }

    return starImages;
  };


  return (

    <LogementContainer className="logement-container">

      <Slideshow images={ logement.pictures } arrows={{ leftArrow, rightArrow }} />

      <Wrapper className="title-rating-host-wrapper">

        <TitleContainer key={ logement.id } className="title-location-tags-container">

          <Title>{ logement.title }</Title>
          <Location>{ logement.location }</Location>
          <TagsContainer>
          {logement.tags.map((tag, index) => (
            <Tags key={ `tag-${ index }`}>{ tag }</Tags>
          ))}
          </TagsContainer>

        </TitleContainer>

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
          customStyle={{ width: "48%" }}
          className="collapse-description"
        />
        <Collapse
          title="Equipements"
          content={ logement.equipments.map((equipment, index) => (
            <ul key={`equipment-${ index }`}>
              <EquipmentList>{ equipment }</EquipmentList>
            </ul>
          ))}
          customStyle={{ width: "48%" }}
          className="collapse-equipments"
        />
      </CollapseContainer>


    </LogementContainer>
  );
}

export default Logement;
