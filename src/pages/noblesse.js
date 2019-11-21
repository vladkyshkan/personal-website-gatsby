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
import Button from "../components/designSystem/Button"
import IconArrow from "../components/designSystem/IconArrow"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"
import ExternalLink from "../components/designSystem/ExternalLink"

const Noblesse = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, company, color, light, url } = cases
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
                <div>
                  <P>
                    Noblesse is the largest Ukrainian distributor of Swiss
                    watches and jewelry.
                  </P>
                  <ExternalLink href={url} target="_blank">
                    <Button light>
                      View website
                      <IconArrow />
                    </Button>
                  </ExternalLink>
                </div>
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
    allCasesJson(filter: { slug: { eq: "noblesse" } }) {
      edges {
        node {
          title
          description
          year
          company
          color
          light
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
`

export default Noblesse
