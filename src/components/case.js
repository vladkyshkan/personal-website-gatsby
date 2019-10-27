import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import H2 from "./designSystem/H2"
import P from "./designSystem/P"
import CaseDetails from "./caseDetails"

const CaseStyled = styled.div`
  img {
    margin-top: 40px;
  }
`

const CaseHeroScreen = styled.div`
  background-color: ${props => props.color};
  color: ${props => (props.light ? theme.dark : theme.white)};
  height: 80vh;
  padding: 0 5%;
`

const CaseHeroScreenTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 100px;
`

const Case = ({
  title,
  description,
  client,
  year,
  company,
  color,
  light,
  imageData,
}) => (
  <CaseStyled>
    <CaseHeroScreen color={color} light={light}>
      <CaseHeroScreenTitle>
        <H2>{description}</H2>
        <CaseDetails client={client} year={year} company={company} />
      </CaseHeroScreenTitle>
      <Image fluid={imageData} alt={title} />
    </CaseHeroScreen>
  </CaseStyled>
)

export default Case
