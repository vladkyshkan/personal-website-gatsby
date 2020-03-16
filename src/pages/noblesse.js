/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import CaseTitle from "../components/caseTitle"
import CaseContent from "../components/caseContent"
import CaseBlock from "../components/caseBlock"
import CaseImageWide from "../components/caseImageWide"
import CaseNext from "../components/caseNext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import H4 from "../components/designSystem/H4"
import P from "../components/designSystem/P"
import Button from "../components/designSystem/Button"
import IconArrow from "../components/designSystem/IconArrow"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"
import ExternalLink from "../components/designSystem/ExternalLink"
import Wrapper from "../components/designSystem/Wrapper"

const Noblesse = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, company, color, light, url } = cases
        const imageData = cases.image.childImageSharp.fluid

        return (
          <Layout key={title}>
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
                    watches and jewelry and has 8 brick and mortar stores across
                    country. Since 1999 the company has successfully operated
                    offline and in recent years set a target to step in digital
                    commerce.
                  </P>
                  <P bold>
                    Our task was to create a custom e-commerce website with
                    functional and distinctive design that could be used as a
                    digital showroom to drive offline sales.
                  </P>
                  <ExternalLink href={url} target="_blank" rel="noopener">
                    <Button dark>
                      View website
                      <IconArrow />
                    </Button>
                  </ExternalLink>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image1.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Challenge</H3>
                <div>
                  <P>
                    Luxury brands historically didn't consider online retail as
                    a distribution platform, but in recent years customers
                    behaviour and market landscape have changed.
                  </P>
                  <P>
                    Noblesse wanted the website to be a marketing channel that
                    could potentially grow into separate sales platform. The
                    biggest challenge during design was to create experience as
                    if the customer was visiting premium offline retail space.
                  </P>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image2.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Research online, buy offline</H3>
                <P>
                  According to latest shopping trends, majority of consumers
                  start their journey with online research prior to visiting
                  brick and mortar store. Noblesse catalog provides an overview
                  of product breadth allowing customers to compare and evaluate
                  different items.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image3.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Product page</H3>
                <P>
                  Noblesse product page has "classic" and well-known for users
                  layout: photo on the left side and product description on the
                  right side. Here customer can find all necessary information
                  regarding product such as collection, material, stones or
                  other specific details to make a decision about purchase
                  without a personal customer assistance.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image4.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Mobile experience</H3>
                <P>
                  More than 60% of e-commerce traffic is coming from mobile and
                  this number is growing year-over-year. We pay special
                  attention to mobile version to help customers easily find
                  products and create truly omnichannel experience.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image5.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Credits</H3>
                <P>
                  Art director and lead designer: Vlad Kyshkan <br />
                  Designer: Serhii Dziadyk
                </P>
              </CaseBlock>
              <StyledLink to="/nova-poshta/">
                <CaseNext background="#EE3A2B">
                  <Wrapper>
                    <Captcha>Next project</Captcha>
                    <H4>Package creation flow redesign</H4>
                    <div>
                      <Image fluid={data.ImageNext.childImageSharp.fluid} />
                    </div>
                  </Wrapper>
                </CaseNext>
              </StyledLink>
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
    Image1: file(relativePath: { eq: "images/cases/noblesse/noblesse-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(relativePath: { eq: "images/cases/noblesse/noblesse-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(relativePath: { eq: "images/cases/noblesse/noblesse-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(relativePath: { eq: "images/cases/noblesse/noblesse-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(relativePath: { eq: "images/cases/noblesse/noblesse-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/noblesse/noblesse-next.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Noblesse
