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
            url
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
        const { title, description, url, image } = sideProject

        return (
          <SideProjectPreview
            title={title}
            description={description}
            url={url}
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
