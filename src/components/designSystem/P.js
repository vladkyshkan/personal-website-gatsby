import styled from "styled-components"

const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.75;
  display: inline-block;
  font-weight: ${props => (props.bold ? 600 : 400)};
  margin: 0;

  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`

export default P
