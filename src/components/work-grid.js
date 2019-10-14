import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkPreview from "./work-preview"

const WorkGridStyled = styled.div``

const WorkGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectJson {
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

  const projects = data.allProjectJson.edges

  return (
    <WorkGridStyled>
      {projects.map(({ node: project }) => {
        const { title, description, slug, color, light } = project
        const { client, year, company } = project.details
        const imageData = project.image.childImageSharp.fluid

        return (
          <WorkPreview
            title={title}
            description={description}
            slug={slug}
            client={client}
            year={year}
            company={company}
            imageData={imageData}
            color={color}
            light={light}
          />
        )
      })}
    </WorkGridStyled>
  )
}

export default WorkGrid
