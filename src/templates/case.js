import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseLayout from "../components/caseLayout"

export const query = graphql`
  query($slug: String!) {
    casesJson(slug: { eq: $slug }) {
      title
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
`

const CaseTemplate = ({ data }) => {
  const cases = data.casesJson
  const { title, description, year, company, color, light } = cases
  const imageData = cases.image.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} />

      <CaseLayout
        title={title}
        description={description}
        year={year}
        company={company}
        color={color}
        light={light}
        imageData={imageData}
      />
    </Layout>
  )
}

export default CaseTemplate
