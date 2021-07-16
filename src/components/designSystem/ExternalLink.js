import styled from "styled-components"

const ExternalLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  text-decoration: none;
  color: ${props => props.color};

  &:hover {
    text-decoration: underline;
  }
`

export default ExternalLink
