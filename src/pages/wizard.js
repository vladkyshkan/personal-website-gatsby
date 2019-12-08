/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import CaseTitle from "../components/caseTitle"
import CaseContent from "../components/caseContent"
import CaseBlock from "../components/caseBlock"
import CaseImageWide from "../components/caseImageWide"
import CaseNext from "../components/caseNext"
import Video from "../components/video"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import H4 from "../components/designSystem/H4"
import Button from "../components/designSystem/Button"
import P from "../components/designSystem/P"
import IconArrow from "../components/designSystem/IconArrow"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"
import ExternalLink from "../components/designSystem/ExternalLink"
import Wrapper from "../components/designSystem/Wrapper"
import WizardVideo from "../data/images/cases/wizard/wizard-video.mp4"

const Wizard = ({ data }) => {
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
                    Wizard is the largest supplier of sanitary ware in Ukraine.
                    The company started to operate more than 20 years ago and
                    since that time became market leader and proved to be a
                    reliable partner to its clients.
                  </P>
                  <P bold>
                    Our task was to help Wizard start operating online through
                    designing new corporate website and b2b platform for
                    partners.
                  </P>
                  <div>
                    <ExternalLink href={url} target="_blank" rel="noopener">
                      <Button dark>
                        View website
                        <IconArrow />
                      </Button>
                    </ExternalLink>
                  </div>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image1.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Corporate website</H3>
                <P>
                  For the corporate website we opted for fullscreen scrolling
                  that makes site look modern and differentiate it from the
                  competitor's resources.
                </P>
              </CaseBlock>
              <Video src={WizardVideo} />
              <CaseImageWide>
                <Image fluid={data.Image2.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>B2B platform</H3>
                <div>
                  <P>
                    One of the key objective Wizard wanted to solve was
                    simplification of product ordering for wholesale customers
                    and minimization of human factors during the ordering
                    process.
                  </P>
                  <P>
                    We created the b2b platform that automated purchase process
                    and gave Wizard partners access to analytics and reporting
                    system.
                  </P>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image3.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <P>
                  After registration partners receive access to closed
                  e-commerce platform where they can compare specs, check
                  availability and order goods at wholesale prices that before
                  was possible only through telephone calls to the supplier
                  managers.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image4.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Custom icon set</H3>
                <P>
                  Wizard sells more than 50 000 items of different categories.
                  We drew 200+ custom sanitary ware icons so the user could
                  quickly find neccesary section in product list.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image5.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Credits</H3>
                <P>
                  Art director: Alexander Kim <br />
                  Designer: Vlad Kyshkan
                </P>
              </CaseBlock>
              <StyledLink to="/md-fashion">
                <CaseNext dark background="#EAE2D8">
                  <Wrapper>
                    <Captcha>Next project</Captcha>
                    <H4>Apparel marketplace redesign & Android application</H4>
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
    allCasesJson(filter: { slug: { eq: "wizard" } }) {
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
    Image1: file(relativePath: { eq: "images/cases/wizard/wizard-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(relativePath: { eq: "images/cases/wizard/wizard-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(relativePath: { eq: "images/cases/wizard/wizard-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(relativePath: { eq: "images/cases/wizard/wizard-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(relativePath: { eq: "images/cases/wizard/wizard-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/wizard/wizard-next.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Wizard
