import styled from "styled-components"
import { theme } from "./designSystem/theme"

const Section = styled.div`
  padding: 128px 5%;
  background-color: ${props => (props.dark ? theme.dark : theme.bg)};
  margin: 0 auto;

  h2 {
    color: ${props => (props.dark ? theme.accent : theme.dark)};
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 900px) {
    padding: 64px 5%;
  }

  @media only screen and (max-width: 500px) {
    h2 {
      margin-bottom: 24px;
    }
  }
`

export default Section
