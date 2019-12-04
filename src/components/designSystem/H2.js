import styled from "styled-components"

const H2 = styled.h2`
  font-size: 7.2rem;
  font-family: "Butler";
  font-weight: 300;
  line-height: 110%;

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
