import styled from "styled-components"
import { theme } from "./designSystem/theme"

const Section = styled.div`
  padding: 120px 0;
  background-color: ${props => (props.dark ? theme.dark : theme.bg)};
  max-width: ${props => (props.fullWidth ? "100%" : "1152px")};
  margin: 0 auto;

  h2 {
    color: ${props => (props.dark ? theme.accent : theme.dark)};
    margin-bottom: 40px;
  }
`

export default Section
