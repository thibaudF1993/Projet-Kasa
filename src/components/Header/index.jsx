import React from "react"
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/.LOGO-1.png'
import styled from "styled-components"
import colors from '../../utils/styles/colors'


const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 50px;
    margin-top: 40px;
    height: 60px;
    width: 86%;
    padding-left: 7%;

    @media (max-width: 375px) {
        align-items: flex-end;
        margin: 0;
        padding-bottom: 15px;
        width: 93%;
    }
    
    @media (min-width: 376px) and (max-width: 480px) {
        align-items: flex-end;
        margin: 0;
        padding-bottom: 25px;
    }

    @media (min-width: 481px) and (max-width: 684px) {
        align-items: flex-end;
        padding-bottom: 30px;
        margin-top: 20px;
      }

`

const HeaderLogo = styled.img`
    width: 213px;

    @media (max-width: 375px) {
        width: 130px;
        height: 43px;
        margin-bottom: 0px;
    }

    @media (min-width: 376px) and (max-width: 480px) {
        width: 135px;
        height: 50px;
    }

    @media (min-width: 481px) and (max-width: 684px) {
        width: 150px;
        height: 58px;
    }

`
const WrapperList = styled.ul`
    display:flex;
    position: sticky;
    left: 72%;
    right: 0%;
    Top: 17px;
    font-size: 24px;
    Height: 34px;

    @media (max-width: 375px) {
        left: 51%;
        Height: 17px;
        font-size: 12px;
        text-transform: uppercase;
    }
    
    @media (min-width: 376px) and (max-width: 480px) {
        Height: 17px;
        font-size: 18px;
    }

    @media (min-width: 481px) and (max-width: 684px) {
        Height: 17px;
        font-size: 20px;
    }

`

const ListHome = styled.li`
    list-style-type : none;
    color: ${ colors.primary };
    margin-right: 60px;
    &:hover {
        text-decoration: underline;
      }

      @media (max-width: 375px) {
        margin-right: 10px;
    }

    @media (min-width: 376px) and (max-width: 480px) {
        margin-right: 15px;
    }

    @media (min-width: 481px) and (max-width: 684px) {
        margin-right: 35px;
    }

`

const ListAbout = styled.li`
    list-style-type : none;
    color: ${ colors.primary };
    display: flex;
    align-items: flex-end;
    text-align: right;
    &:hover {
        text-decoration: underline;
      }
`

const LinkList = styled(NavLink)`
    text-decoration: none; 
`

const Header = () => {
    return (
        <WrapperHeader>
            <HeaderLogo src={Logo} alt="Logo" />
            <Navigation />
         </WrapperHeader>
    )
}

const Navigation = () => {
    return (
        <WrapperList>
            <LinkList to='/'>
                <ListHome>Accueil</ListHome>
            </LinkList>
            <LinkList to='/about'>
                <ListAbout>A propos</ListAbout>
            </LinkList>
        </WrapperList>
    )
}

export default Header