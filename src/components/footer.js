/* eslint-disable react/jsx-one-expression-per-line */
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

  p {
    color: ${theme.white};
    opacity: 0.5;
    margin: 0;
  }
`

const ExternalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 80px 0;
  color: ${theme.accent};

  a,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    text-decoration: none;
    color: ${theme.accent};
  }

  a:after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background-color: ${theme.accent};
    transition: width 0.4s;
  }

  a:hover::after {
    width: 100%;
  }
`

const SocialMediaLinks = [
  {
    name: "Mail",
    link: "mailto:vladkyshkan@gmail.com",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vlad.kyshkan",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vladkyshkan",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vlad-kyshkan",
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/vladkyshkan",
  },
  {
    name: "Github",
    link: "https://github.com/vladkyshkan",
  },
]

const Footer = () => (
  <StyledFooter id="contact">
    <H2>Contact</H2>
    <ExternalLinks>
      {SocialMediaLinks.map(link => (
        <ExternalLink key={link.name} href={link.link} target="_blank">
          {link.name}
        </ExternalLink>
      ))}
    </ExternalLinks>
    <P>© {new Date().getFullYear()} Vlad Kyshkan</P>
  </StyledFooter>
)

export default Footer
