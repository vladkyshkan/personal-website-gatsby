import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CasePreview from "./casePreview"

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
            role
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
    <div>
      {cases.map(({ node: cases }, index) => {
        const { title, description, slug, year, role, color, light } = cases
        const imageData = cases.image.childImageSharp.fluid

        return (
          <CasePreview
            title={title}
            description={description}
            slug={slug}
            year={year}
            role={role}
            imageData={imageData}
            color={color}
            light={light}
            key={title}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default CaseGrid
