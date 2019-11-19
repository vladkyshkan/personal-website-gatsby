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
            images {
              image1 {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image2 {
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
    }
  `)

  const sideProjects = data.allSideProjectsJson.edges

  return (
    <SideProjectsGridStyled>
      {sideProjects.map(({ node: sideProject }) => {
        const { title, description, link, images } = sideProject

        return (
          <SideProjectPreview
            title={title}
            description={description}
            link={link}
            image1={images.image1.childImageSharp.fluid}
            image2={images.image2.childImageSharp.fluid}
            key={title}
          />
        )
      })}
    </SideProjectsGridStyled>
  )
}

export default SideProjectsGrid
