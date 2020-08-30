import styled from "styled-components"

const H1 = styled.h1`
  font-size: 8rem;
  line-height: 110%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;

  @media only screen and (max-width: 960px) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 4.8rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 4rem;
  }
`

export default H1
