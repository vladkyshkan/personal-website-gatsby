import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseBlock = styled.div`
  max-width: 1152px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 128px 5%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  color: ${props => (props.dark ? theme.accent : theme.dark)};
  background-color: ${props =>
    props.dark ? theme.dark : props.gray ? theme.gray : theme.bg};

  h3 {
    grid-column-start: 1;
    grid-column-end: span 5;
  }

  div,
  p {
    grid-column-start: 7;
    grid-column-end: span 6;
  }

  p + h5 {
    margin-top: 16px;
  }

  ul {
    font-size: 1.6rem;
    line-height: 1.75;
    margin: 18px 0 0 18px;
  }

  li {
    padding-bottom: 8px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  p:not(:nth-of-type(1)),
  button {
    margin-top: 32px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 32px;
    padding: 64px 5%;

    h3 {
      grid-column: 1 / -1;
    }

    div,
    p {
      grid-column: 1 / -1;
    }

    a {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    ul {
      font-size: 1.4rem;
    }
  }
`

export default CaseBlock
