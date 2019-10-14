import styled from "styled-components"
import { theme } from "./theme"

const ExternalLink = styled.a`
  display: inline-block;
  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-right: 32px;

  &,
  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    color: ${theme.accent};
  }

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
`

export default ExternalLink
