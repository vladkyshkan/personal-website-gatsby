import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "./designSystem/theme"
import StyledLink from "./designSystem/StyledLink"

const StyledHeader = styled.header`
  background-color: ${theme.dark};
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  z-index: 9;
  position: fixed;
  left: 0;
  right: 0;
  transition: top 0.2s ease-in-out;
  color: ${theme.accent};
`

const Logo = styled.p`
  font-size: 1.8rem;
  font-family: "Butler";
  font-weight: 500;
  line-height: 100%;
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
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Logo>
    <NavigationLinks>
      <StyledLink to="/#work">Work</StyledLink>
      <StyledLink to="/#projects">Projects</StyledLink>
      <StyledLink to="/#contact">Contact</StyledLink>
    </NavigationLinks>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
