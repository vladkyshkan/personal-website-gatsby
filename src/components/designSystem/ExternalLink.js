import styled from "styled-components"
import { theme } from "./theme"

const ExternalLink = styled.a`
  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-right: 32px;
  text-decoration: none;
  color: ${theme.dark};
`

export default ExternalLink
