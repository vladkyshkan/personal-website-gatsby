/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import CaseTitle from "../components/caseTitle"
import CaseContent from "../components/caseContent"
import CaseBlock from "../components/caseBlock"
import CaseImage from "../components/caseImage"
import CaseQuote from "../components/caseQuote"
import CaseNext from "../components/caseNext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import H4 from "../components/designSystem/H4"
import H5 from "../components/designSystem/H5"
import P from "../components/designSystem/P"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"

const MdFashion = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, company, color, light } = cases
        const imageData = cases.image.childImageSharp.fluid

        return (
          <Layout>
            <SEO title={title} description={description} />
            <GlobalStyle />
            <CaseTitle
              title={title}
              description={description}
              year={year}
              company={company}
              color={color}
              light={light}
              imageData={imageData}
              key={title}
            />
            <CaseContent>
              <CaseBlock>
                <H3>Overview</H3>
                <P>
                  MD Fashion is an authorized distributor of many fashion and
                  lifestyle brands (Tommy Hilfiger, Under Armour, Calvin Klein,
                  Diesel etc) in Ukraine. The company sells its production both
                  through 140 stores as well as website and iOS application.
                </P>
                <P bold>
                  Currently MD Fashion looks for new channels for attracting
                  customers and engaging with existing ones. Our task was to
                  create an Android mobile application to fulfill these goals.
                </P>
              </CaseBlock>
              {/* <Image fluid={data.Image1.childImageSharp.fluid} /> */}
            </CaseContent>
          </Layout>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allCasesJson(filter: { slug: { eq: "md-fashion" } }) {
      edges {
        node {
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
    }
  }
`

export default MdFashion
