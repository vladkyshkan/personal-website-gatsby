import React from "react"
import styled from "styled-components"
import { theme } from "./designSystem/theme"
import H1 from "./designSystem/H1"
import Wrapper from "./designSystem/Wrapper"
import CaseDetails from "./caseDetails"

const CaseStyled = styled.div``

const CaseHeroScreen = styled.div`
  background-color: ${props => props.color};
  color: ${props => (props.light ? theme.dark : theme.white)};
  padding: 120px 5%;

  h1 {
    max-width: 1152px;
    margin-bottom: 48px;
  }

  @media only screen and (max-width: 500px) {
    padding: 120px 5% 64px 5%;
  }
`

const CaseTitle = ({ title, description, year, role, color, light }) => (
  <CaseStyled key={title}>
    <CaseHeroScreen color={color} light={light}>
      <Wrapper>
        <H1>
          {title}
{' '}
— {description}
        </H1>
        <CaseDetails project={title} year={year} role={role} />
      </Wrapper>
    </CaseHeroScreen>
  </CaseStyled>
)

export default CaseTitle
