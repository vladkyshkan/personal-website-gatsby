import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkPreview from "./workPreview"

const WorkGridStyled = styled.div`
  margin-bottom: -120px;
`

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
      {projects.map(({ node: project }, index) => {
        const { title, description, slug, color, light } = project
        const { client, year, company } = project.details
        const imageData = project.image.childImageSharp.fluid
        const isEven = index % 2

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
            key={title}
            index={index}
            right={isEven ? undefined : true}
          />
        )
      })}
    </WorkGridStyled>
  )
}

export default WorkGrid