import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "../components/designSystem/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import H1 from "../components/designSystem/H1"
import P from "../components/designSystem/P"
import Wrapper from "../components/designSystem/Wrapper"
import ExternalLink from "../components/designSystem/ExternalLink"

const AboutBlock = styled.div`
  max-width: 100%;
  display: block;
  background: ${theme.dark};
  padding: 120px 5% 40px;

  h1,
  p {
    color: ${theme.accent};
  }

  h1 {
    padding-bottom: 64px;
  }

  p {
    margin-bottom: 32px;
  }

  a {
    color: #1FB762;
  }

  p:nth-child(2) > a {
    color: #FF875F;
  }

  p:nth-child(3) > a {
    color: #FFB900;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 500px) {
    padding-bottom: 0;
  }

`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 64px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 64px;
  }
`

const AboutImage = styled.div`
  width: 100%;
  max-width: 564px;
  
  @media only screen and (max-width: 1023px) {
    order: -1;
  }
`

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <AboutBlock>
      <Wrapper>
        <H1>Hey, I am Vlad.</H1>
        <AboutContent>
          <div>
            <P>
              I am a Product Designer living in Kyiv, Ukraine and currently
              responsible for user experience across iOS, Android and Web at
  {" "}
              <ExternalLink
                href="https://www.zakaz.ua"
                target="_blank"
                rel="noopener"
              >
                Zakaz.ua
              </ExternalLink>
              . We are building world-class food delivery service from
              supermarkets and helping people spend their time with loved ones,
              not in stores.
            </P>
            <P>
              Prior to that, I worked as the Head of Design at
  {" "}
              <ExternalLink
                href="https://www.theomnicore.com"
                target="_blank"
                rel="noopener"
              >
                Omnicore
              </ExternalLink>
  {" "}
              where managed team of 5 designers and created e-commerce stores for
              apparel and accessories brands.
  {" "}
            </P>
            <P>
              Earlier I was a Marketing Specialist at
  {" "}
              <ExternalLink
                href="https://www.microsoft.com/"
                target="_blank"
                rel="noopener"
              >
                Microsoft
              </ExternalLink>
  {" "}
              where worked with technical audiences and cloud products.
            </P>

            <P>
              In my spare time I like to tinker with React and no-code tools,
              build side projects, learn more about indie businesses and AI/ML,
              visit music festivals and new places around the world.
            </P>
            <P> 
              Feel free to reach me via mail or Telegram.
            </P>
          </div>
          <AboutImage>
            <Image fluid={data.Avatar.childImageSharp.fluid} />
          </AboutImage>
        </AboutContent>
      </Wrapper>
    </AboutBlock>
  </Layout>
)

export const query = graphql`
  query {
    Avatar: file(relativePath: { eq: "images/about/avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 564, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`  

export default About
