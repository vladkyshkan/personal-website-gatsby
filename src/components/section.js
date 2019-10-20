import styled from "styled-components"
import { theme } from "./designSystem/theme"

const Section = styled.div`
  padding: 120px 5%;
  background-color: ${props => (props.dark ? theme.dark : theme.bg)};

  h2 {
    color: ${props => (props.dark ? theme.accent : theme.dark)};
    margin-bottom: 40px;
  }
`

export default Section