import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "./designSystem/theme"
import StyledLink from "./designSystem/StyledLink"
import Wrapper from "./designSystem/Wrapper"

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 5%;
  height: 56px;
  position: absolute;
  background-color: transparent;
  color: ${theme.accent};
  z-index: 9;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Logo = styled.p`
  font-size: 1.8rem;
  font-family: "Butler";
  font-weight: 500;
  line-height: 100%;

  @media only screen and (max-width: 31.25rem) {
    font-size: 1.6rem;
  }
`

const NavigationLinks = styled.div`
  * {
    display: inline-block;
    font-family: "IBM Plex Mono";
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-left: 32px;

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      background-color: ${theme.accent};
      transition: width 0.4s;
    }

    &:hover::after {
      width: 100%;
    }

    @media only screen and (max-width: 31.25rem) {
      margin-left: 24px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Logo>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Logo>
      <NavigationLinks>
        <StyledLink to="/#work">Work</StyledLink>
        <StyledLink to="/#projects">Projects</StyledLink>
        <StyledLink to="/#contact">Contact</StyledLink>
      </NavigationLinks>
    </Wrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
