import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import Case from "../components/case"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const CaseTemplate = ({ data }) => {
  const project = data.projectsJson
  const { title, description, color, light } = project
  const { client, year, company } = project.details
  const imageData = project.image.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} />
      <GlobalStyle />

      <Case
        title={title}
        description={description}
        client={client}
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
