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
import H5 from "../components/designSystem/H5"
import P from "../components/designSystem/P"
import Button from "../components/designSystem/Button"
import IconArrow from "../components/designSystem/IconArrow"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"
import ExternalLink from "../components/designSystem/ExternalLink"
import Wrapper from "../components/designSystem/Wrapper"

const MdFashion = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, company, color, light, url } = cases
        const imageData = cases.image.childImageSharp.fluid

        return (
          <Layout key={title} dark="true">
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
                    MD Fashion is an authorized distributor of many fashion and
                    lifestyle brands (Tommy Hilfiger, Under Armour, Calvin
                    Klein, Diesel etc) in Ukraine. The company sells its
                    production both through 140 stores as well as website and
                    iOS application.
                  </P>
                  <P bold>
                    Currently MD Fashion looks for new channels for attracting
                    customers and engaging with existing ones. Our task was to
                    redesign existing website and create an Android mobile
                    application to fulfill these goals.
                  </P>
                  <ExternalLink href={url} target="_blank" rel="noopener">
                    <Button dark>
                      View website
                      <IconArrow />
                    </Button>
                  </ExternalLink>
                  <ExternalLink
                    href="https://play.google.com/store/apps/details?id=com.omnicore.md_fashion"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button dark>
                      Download app
                      <IconArrow />
                    </Button>
                  </ExternalLink>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image1.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Initial experience</H3>
                <P>
                  Although not all users start their shopping experience from
                  the homepage (they can get to specific category or product
                  page through search, ads or promotional emails), it is still
                  important to show what type of site it is and what products
                  customers can find here. MD Fashion homepage has different
                  parts such as brands, custom collections, popular categories
                  and items, that could inspire users to explore website and
                  find clothes or shoes they are looking for.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image2.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Product list & filtering</H3>
                <div>
                  <P>
                    Well-designed product list is a foundation of great
                    e-commerce experience. MD Fashion product list has left
                    sidebar with categories that helps users easily understand
                    their current scope and navigate within other product
                    categories while all applied filters are displayed as
                    summary at the top of the page.
                  </P>
                  <P>
                    MD Fashion is a marketplace so it is neccessary to provide
                    options for brands promotion, such as banner ads and
                    seperate landing pages.
                  </P>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image3.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Product page</H3>
                <P>
                  The product page is where majority of customers make decision
                  on whether or not they want to purchase the item. Images from
                  multiple angles as well as information regarding material, fit
                  and brand help users to better evaluate the product. One of
                  the biggest problem during online shopping is to choose size
                  of the item correctly, so we provide size guide and matching
                  between international and manufacture sizes.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image4.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Order flow</H3>
                <P>
                  Cart page is vital in the product order flow because on this
                  page the customer makes a decision about purchase. What if
                  customer hasn't add any items to cart? Then the website
                  displays favorites and recommended items instead of empty
                  screen and in such a way could increase average order value.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image5.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <P>
                  For the checkout we opted for an accordion-style flow where
                  the just-completed step collapses into summary and the new one
                  expands. Such a structure divides all fields into logical
                  chunks such as "Contact information", "Delivery", "Loyalty"
                  and "Payment", thus decreases user's mental workload.
                  Moreover, this type of checkout allows customers to review
                  previously typed information and spot errors earlier on.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image6.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Account</H3>
                <P>
                  The largest part of any e-commerce revenue comes from
                  returning customers and account service can make their life
                  much easier. Here users can save personal data for quick
                  checkout, check order history or available bonuses and
                  subscribe to news and promotions.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image7.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Mobile application</H3>
                <div>
                  <P>
                    We designed MD Fashion Android application from scratch. Our
                    goal was to create an app that could be as functional as
                    website and deliver proper shopping experience to the fans
                    of world-known brands in Ukraine.
                  </P>
                  <H5>50+ screens</H5>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image8.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Credits</H3>
                <P>
                  Art director and lead designer: Vlad Kyshkan <br />
                  Designer: Serhii Dziadyk
                </P>
              </CaseBlock>
              <StyledLink to="/lun/">
                <CaseNext background="#FD7C23">
                  <Wrapper>
                    <Captcha>Next project</Captcha>
                    <H4>City comfort map design for social project</H4>
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
    allCasesJson(filter: { slug: { eq: "md-fashion" } }) {
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
    Image1: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-3.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-4.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-5.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image6: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-6.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image7: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-7.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image8: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-8.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/md-fashion/md-fashion-next.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default MdFashion
