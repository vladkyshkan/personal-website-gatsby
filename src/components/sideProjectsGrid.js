import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { theme } from "./designSystem/theme"
import SideProjectPreview from "./sideProjectPreview"

const SideProjectsGridStyled = styled.div`
  position: relative;

  &:before {
    content: "";
    margin: 0 auto;
    position: absolute;
    left: 1px;
    right: 1px;
    top: -48px;
    border-bottom: 1px solid ${theme.accent};
    opacity: 0.5;
  }
`

const SideProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allSideProjectsJson {
        edges {
          node {
            title
            description
            link
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

  const sideProjects = data.allSideProjectsJson.edges

  return (
    <SideProjectsGridStyled>
      {sideProjects.map(({ node: sideProject }, index) => {
        const { title, description, link, image } = sideProject
        const isEven = index % 2

        return (
          <SideProjectPreview
            title={title}
            description={description}
            link={link}
            image={image.childImageSharp.fluid}
            key={title}
            index={index}
            right={isEven ? undefined : true}
          />
        )
      })}
    </SideProjectsGridStyled>
  )
}

export default SideProjectsGrid
