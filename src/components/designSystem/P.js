import styled from "styled-components"

const P = styled.p`
  font-size: 1.4rem;
  line-height: 180%;
  display: inline-block;
  font-weight: ${props => (props.bold ? 600 : 400)};
`

export default P
