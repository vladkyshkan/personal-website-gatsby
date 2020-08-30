import styled from "styled-components"

const H2 = styled.h2`
  font-size: 6.4rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;

  @media only screen and (max-width: 1120px) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 4.8rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 4rem;
  }
`

export default H2
