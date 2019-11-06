import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import H2 from "./designSystem/H2"
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

const CaseLayout = () => {
  const data = useStaticQuery(graphql`
    {
      allCasesJson(filter: { slug: { eq: "nova-poshta" } }) {
        edges {
          node {
            title
            description
            year
            company
            color
            light
            # image {
            #   childImageSharp {
            #     fluid(quality: 100) {
            #       ...GatsbyImageSharpFluid
            #     }
            #   }
            # }
          }
        }
      }
    }
  `)

  const cases = data.allCasesJson.edges
  const { title, description, slug, year, company, color, light } = cases
  // const imageData = cases.image.childImageSharp.fluid

  return (
    <CaseStyled>
      <CaseHeroScreen color="red" light={light}>
        <CaseHeroScreenTitle>
          <H2>{description}</H2>
          <CaseDetails client={title} year={year} company={company} />
        </CaseHeroScreenTitle>
        <CaseCover>
          {/* <Image fluid={imageData} alt={title} style={{ maxHeight: "100%" }} /> */}
        </CaseCover>
      </CaseHeroScreen>
    </CaseStyled>
  )
}

export default CaseLayout
