import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import H2 from "./designSystem/H2"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"
import CaseDetails from "./caseDetails"

const CaseStyled = styled.div``

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

const CaseCover = styled.div`
  display: block;
  max-height: 100%;
  height: 500px;

  img {
    margin-top: 40px;
  }
`

const CaseContent = styled.div`
  padding: 0 5%;
  margin-top: 380px;
`

const CaseBlock = styled.div`
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  color: ${theme.dark};

  h3 {
    grid-column-start: 2;
    grid-column-end: span 4;
  }

  p {
    grid-column-start: 6;
    grid-column-end: span 6;
  }
`

const CaseLayout = ({
  title,
  description,
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
        <CaseDetails client={title} year={year} company={company} />
      </CaseHeroScreenTitle>
      <CaseCover>
        <Image fluid={imageData} alt={title} style={{ maxHeight: "100%" }} />
      </CaseCover>
    </CaseHeroScreen>
    <CaseContent>
      <CaseBlock>
        <H3>Overview</H3>
        <P>
          Nova Poshta is the largest express delivery service for documents and
          packages for businesses and individuals in Ukraine. One of the
          company's main goal is to increase % of people that use its digital
          services (and thereby spend less time at the departments) so the
          company could cut business costs and invest them in other projects.
        </P>
        <P bold>
          Our task was to redesign a package creation flow in mobile application
          and in such a way increase percentage of packages created online to
          reduce load on departments. This task was done during 5-day Product
          design course by Apollo Design Center.
        </P>
      </CaseBlock>
      <Image fluid={imageData} alt={title} />
      <CaseBlock>
        <H3>Research methods</H3>
        <P>
          To achieve business goals, we have to deeply understand constraints,
          problems and user needs. Our team used several research methods to
          gain these insights including: - Stakeholder interview; - 2 customer
          interviews; - 4 Customer Journey Maps; - 18 user tests (including 5
          field tests); - 4 paper and 3 digital prototypes.
        </P>
      </CaseBlock>
    </CaseContent>
  </CaseStyled>
)

export default CaseLayout
