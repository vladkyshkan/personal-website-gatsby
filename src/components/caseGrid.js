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
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            details {
              client
              year
              company
            }
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

  const projects = data.allProjectsJson.edges

  return (
    <CaseGridStyled>
      {projects.map(({ node: project }, index) => {
        const { title, description, slug, color, light } = project
        const { client, year, company } = project.details
        const imageData = project.image.childImageSharp.fluid
        const isEven = index % 2

        return (
          <CasePreview
            title={title}
            description={description}
            slug={slug}
            client={client}
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
