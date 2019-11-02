import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import CasePreview from "./casePreview"

const CaseGridStyled = styled.div`
  margin-bottom: -120px;
`

const CaseGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allCasesJson {
        edges {
          node {
            title
            slug
            description
            year
            company
            color
            light
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const cases = data.allCasesJson.edges

  return (
    <CaseGridStyled>
      {cases.map(({ node: cases }, index) => {
        const { title, description, slug, year, company, color, light } = cases
        const imageData = cases.image.childImageSharp.fluid
        const isEven = index % 2

        return (
          <CasePreview
            title={title}
            description={description}
            slug={slug}
            year={year}
            company={company}
            imageData={imageData}
            color={color}
            light={light}
            key={title}
            index={index}
            right={isEven ? undefined : true}
          />
        )
      })}
    </CaseGridStyled>
  )
}

export default CaseGrid
