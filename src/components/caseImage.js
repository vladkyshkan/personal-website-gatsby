import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseImage = styled.div`
  width: 100%;
  margin-top: -64px;
  padding-bottom: 128px;
  background-color: ${props =>
    props.dark ? theme.dark : props.gray ? theme.gray : theme.bg};

  div {
    margin: 0 auto;
    max-width: 1152px;
    box-shadow: ${props =>
      props.shadow ? "0px 6px 30px rgba(0, 0, 0, 0.1)" : null};
  }

  @media only screen and (max-width: 900px) {
    margin-top: -32px;
    padding-bottom: 64px;

    div {
      margin: 0 5%;
    }
  }
`

export default CaseImage
