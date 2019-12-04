import styled from "styled-components"
import CaseBlock from "./caseBlock"

const CaseBlockWide = styled(CaseBlock)`
  max-width: 100%;
  display: block;

  div {
    max-width: 1152px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;

    h3 + div {
      display: block;
      grid-column-start: 6;
      grid-column-end: span 6;
    }
  }

  @media only screen and (max-width: 900px) {
    div {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 32px;

      h3 + div {
        grid-column-start: 1;
        grid-column-end: -1;
      }
    }
  }
`

export default CaseBlockWide
