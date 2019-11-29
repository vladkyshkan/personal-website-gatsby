import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseBlock = styled.div`
  padding: 120px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  color: ${props => (props.dark ? theme.accent : theme.dark)};
  background-color: ${props =>
    props.dark ? theme.dark : props.gray ? theme.gray : theme.bg};

  h3 {
    grid-column-start: 3;
    grid-column-end: span 2;
  }

  div,
  p {
    grid-column-start: 6;
    grid-column-end: span 5;
  }

  ul {
    font-size: 14px;
    line-height: 25px;
    margin: 18px 0 0 18px;
  }

  li {
    padding-bottom: 8px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  p:nth-of-type(2),
  button {
    margin-top: 32px;
  }

  div {
    p + h4 {
      margin-top: 24px;
    }
  }
`

export default CaseBlock
