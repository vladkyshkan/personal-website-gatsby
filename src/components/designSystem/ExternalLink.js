import styled from "styled-components"

const ExternalLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  text-decoration: none;
  color: #1FB762; /* Rewrite for props so each case study had unique color */

  &:hover {
    text-decoration: underline;
  }
`

export default ExternalLink
