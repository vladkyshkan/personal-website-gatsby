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

  @media only screen and (max-width: 31.25rem) {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default ExternalLink
