import styled from "styled-components"
import { theme } from "./designSystem/theme"

const CaseNext = styled.div`
  margin: 0 5%;
  padding: 32px 12% 0 12%;
  color: ${theme.white};
  background-color: #1b1f25;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1152px;
  transition: 0.3s ease-in-out;

  p {
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 32px;
  }

  div {
    width: 100%;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-in-out;
  }
`

export default CaseNext
