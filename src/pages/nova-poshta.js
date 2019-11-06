import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import CaseLayout from "../components/caseLayout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import P from "../components/designSystem/P"
import { theme } from "../components/designSystem/theme"

const CaseContent = styled.div`
  margin-top: 380px;
  background-color: ${theme.bg};
`

const CaseBlock = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  color: ${theme.dark};
  background-color: ${props => (props.gray ? theme.gray : theme.bg)};

  h3 {
    grid-column-start: 2;
    grid-column-end: span 4;
  }

  p {
    grid-column-start: 6;
    grid-column-end: span 6;
  }

  ul {
    margin: 18px;
  }

  li {
    padding-bottom: 8px;

    &:last-child {
      padding-bottom: 0;
    }
  }
`

const NovaPoshta = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     Image1: file(
  //       relativePath: { eq: "images/cases/nova-poshta/nova-poshta-1.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //           presentationWidth
  //         }
  //       }
  //     }
  //     Image2: file(
  //       relativePath: { eq: "images/cases/nova-poshta/nova-poshta-2.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 928, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //           presentationWidth
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Nova Poshta" />
      <GlobalStyle />
      <CaseLayout />
      <CaseContent>
        <CaseBlock>
          <H3>Overview</H3>
          <P>
            Nova Poshta is the largest express delivery service for documents
            and packages for businesses and individuals in Ukraine. One of the
            company's main goal is to increase % of people that use its digital
            services (and thereby spend less time at the departments) so the
            company could cut business costs and invest them in other projects.
          </P>
          <P bold>
            Our task was to redesign a package creation flow in mobile
            application and in such a way increase percentage of packages
            created online to reduce load on departments. This task was done
            during 5-day Product design course by Apollo Design Center.
          </P>
        </CaseBlock>
        <Image fluid={data.Image1.childImageSharp.fluid} />
        <CaseBlock>
          <H3>Research methods</H3>
          <P>
            To achieve business goals, we have to deeply understand constraints,
            problems and user needs. Our team used several research methods to
            gain these insights including:
            <ul>
              <li>Stakeholder interview;</li>
              <li>2 customer interviews;</li>
              <li>4 Customer Journey Maps;</li>
              <li>18 user tests (including 5 field tests);</li>
              <li>4 paper and 3 digital prototypes.</li>
            </ul>
          </P>
        </CaseBlock>
        <Image fluid={data.Image2.childImageSharp.fluid} />
        <CaseBlock gray>
          <H3>Stakeholder interview</H3>
          <P>
            A first step in gathering information about business and its needs.
            We interviewed Artem Volkhonskyi (Head of Digital Product
            Development), who shared with us company's long-term goals, business
            insights, user segments and their usage patterns. Some of them are
            following:
            <ul>
              <li>
                Package size, not weight, is the most important parameter for
                transportation;
              </li>
              <li>
                An absolute majority of customers use the same department of
                Nova Poshta both for sending and receiving packages;
              </li>
              <li>
                Description of the package is important for determination of
                compensation for package loss or damaging.
              </li>
            </ul>
          </P>
        </CaseBlock>
      </CaseContent>
    </Layout>
  )
}

export const query = graphql`
  query {
    Image1: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-1.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 928, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NovaPoshta
