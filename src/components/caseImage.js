import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseImage = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  margin-top: -60px;
  padding-bottom: 120px;
  background-color: ${props => (props.gray ? theme.gray : theme.bg)};

  div {
    max-width: 928px;
    grid-column-start: 3;
    grid-column-end: span 8;
    box-shadow: ${props =>
      props.shadow ? "0px 6px 30px rgba(0, 0, 0, 0.1)" : null};
  }
`

export default CaseImage
