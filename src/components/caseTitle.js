import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import H2 from "./designSystem/H2"
import Wrapper from "./designSystem/Wrapper"
import CaseDetails from "./caseDetails"

const CaseStyled = styled.div``

const CaseHeroScreen = styled.div`
  background-color: ${props => props.color};
  color: ${props => (props.light ? theme.dark : theme.white)};
  height: 535px;
  padding: 0 5%;
`

const CaseHeroScreenTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 48px;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 100px;

  @media only screen and (max-width: 1024px) {
    grid-auto-flow: row;
    grid-gap: 16px;
  }
`

const CaseCover = styled.div`
  display: block;
  max-height: 100%;
  height: 500px;

  div {
    margin-top: 40px;
  }
`

const CaseTitle = ({
  title,
  description,
  year,
  company,
  color,
  light,
  imageData,
}) => (
  <CaseStyled key={title}>
    <CaseHeroScreen color={color} light={light}>
      <Wrapper>
        <CaseHeroScreenTitle>
          <H2>{description}</H2>
          <CaseDetails client={title} year={year} company={company} />
        </CaseHeroScreenTitle>
        <CaseCover>
          <Image fluid={imageData} alt={title} style={{ maxHeight: "100%" }} />
        </CaseCover>
      </Wrapper>
    </CaseHeroScreen>
  </CaseStyled>
)

export default CaseTitle
