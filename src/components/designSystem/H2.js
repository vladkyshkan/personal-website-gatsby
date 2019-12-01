import styled from "styled-components"

const H2 = styled.h2`
  font-size: 7.2rem;
  font-family: "Butler";
  font-weight: 300;
  line-height: 110%;

  @media only screen and (max-width: 70rem) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 37.5rem) {
    font-size: 4.8rem;
  }

  @media only screen and (max-width: 25rem) {
    font-size: 4rem;
  }
`

export default H2
