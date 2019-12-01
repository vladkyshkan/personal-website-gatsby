import styled from "styled-components"

const H1 = styled.h1`
  font-size: 10rem;
  font-family: "Butler";
  font-weight: 300;
  line-height: 100%;

  @media only screen and (max-width: 60rem) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 37.5rem) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 25rem) {
    font-size: 4.6rem;
  }
`

export default H1
