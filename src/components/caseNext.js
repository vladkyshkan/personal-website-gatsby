import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseNext = styled.div.attrs(props => ({
  background: props.background,
}))`
  margin: 0 5%;
  transition: 0.3s ease-in-out;

  div {
    padding: 32px 155px 0 155px;
    color: ${props => (props.dark ? theme.dark : theme.white)};
    background-color: ${props => props.background};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  p {
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 32px;
  }

  h4 + div {
    display: block;
    padding: 0;
    width: 100%;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-in-out;
  }

  @media only screen and (max-width: 900px) {
    div {
      padding: 32px 10% 0 10%;
    }
  }
`

export default CaseNext
