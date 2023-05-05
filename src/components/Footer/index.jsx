import React from "react"
import Logo from '../../assets/.LOGO-1.png';
import styled from "styled-components";

const FooterWrapper = styled.div `
    position: absolute;
    text-align: center;
    width: 100%;
    background-color: black;
    padding-top: 45px;
    margin-top: 40px;
    padding-bottom: 9px;
`

const StyledText = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 500;
    
    @media (max-width: 375px) {
        font-size: 12px;
        padding-bottom: 30px;
    }

    @media (min-width: 376px) and (max-width: 480px) {
        font-size: 18px;
    }

    @media (min-width: 481px) and (max-width: 684px) {
        font-size: 21px;
    }
`
const LogoFooter = styled.img`
    filter: brightness(4);

    @media (max-width: 375px) {
        width: 130px;
        height: 43px;
    }
`


const Footer = () => {
    return (
        <FooterWrapper>
            <LogoFooter src={Logo} alt="Logo" />
            <StyledText>© 2020 Kasa. All rights reserved</StyledText>
        </FooterWrapper>
    )
}

export default Footer