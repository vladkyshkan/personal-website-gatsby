import React from "react"
import styled from "styled-components"
import { theme } from "./designSystem/theme"
import H2 from "./designSystem/H2"
import P from "./designSystem/P"
import ExternalLink from "./designSystem/ExternalLink"

const StyledFooter = styled.footer`
  background-color: ${theme.dark};
  padding: 80px 5% 40px;

  h2 {
    color: ${theme.accent};
  }
`

const ExternalLinks = styled.div`
  margin-top: 24px;
  color: ${theme.accent};
`

const Footer = () => (
  <StyledFooter>
    <H2>Contact</H2>
    <ExternalLinks>
      <ExternalLink>Mail</ExternalLink>
      <ExternalLink>Facebook</ExternalLink>
      <ExternalLink>Twitter</ExternalLink>
      <ExternalLink>LinkedIn</ExternalLink>
      <ExternalLink>Dribbble</ExternalLink>
      <ExternalLink>Github</ExternalLink>
    </ExternalLinks>
  </StyledFooter>
)

export default Footer

{
  /* <footer>
©
{new Date().getFullYear()}
, Built with
</footer> */
}
