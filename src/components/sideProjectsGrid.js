import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SideProjectPreview from "./sideProjectPreview"

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
    <div>
      {sideProjects.map(({ node: sideProject }, index) => {
        const { title, description, link, image } = sideProject

        return (
          <SideProjectPreview
            title={title}
            description={description}
            link={link}
            image={image.childImageSharp.fluid}
            key={title}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default SideProjectsGrid
