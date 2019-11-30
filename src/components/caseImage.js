import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseImage = styled.div`
  width: 100%;
  margin-top: -60px;
  padding-bottom: 120px;
  background-color: ${props => (props.gray ? theme.gray : theme.bg)};

  div {
    margin: 0 auto;
    max-width: 800px;
    box-shadow: ${props =>
      props.shadow ? "0px 6px 30px rgba(0, 0, 0, 0.1)" : null};
  }
`

export default CaseImage
