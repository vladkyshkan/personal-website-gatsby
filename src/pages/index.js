import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import Bio from "../components/bio"
import Section from "../components/section"
import CaseGrid from "../components/caseGrid"
import BooksGrid from "../components/booksGrid"
import SideProjectsGrid from "../components/sideProjectsGrid"
import Wrapper from "../components/designSystem/Wrapper"
import H1 from "../components/designSystem/H1"
import H2 from "../components/designSystem/H2"
import H4 from "../components/designSystem/H4"
import ExternalLink from "../components/designSystem/ExternalLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />

    <Bio>
      <Wrapper>
        <H1>Vlad Kyshkan, product designer</H1>
        <H4>
          Currently working as a Product Designer at
{" "}
          <ExternalLink href="https://www.zakaz.ua" target="_blank" rel="noopener">
            Zakaz.ua
          </ExternalLink>
          . Previously, Head of Design at
{" "}
          <ExternalLink
            href="https://www.theomnicore.com/"
            target="_blank"
            rel="noopener"
          >
            Omnicore
          </ExternalLink>
          .
        </H4>
        <H4>
          Like to think in systems, solve broadly defined problems, take full
          ownership of the product and collaborate with engineers.
        </H4>
      </Wrapper>
    </Bio>

    <Section id="work">
      <Wrapper>
        <H2>Selected work</H2>
        <CaseGrid />
      </Wrapper>
    </Section>

    <Section id="projects" dark>
      <Wrapper>
        <H2>Side projects</H2>
        <SideProjectsGrid />
      </Wrapper>
    </Section>

    <Section>
      <Wrapper>
        <H2>Books I love</H2>
        <BooksGrid />
      </Wrapper>
    </Section>
  </Layout>
)

export default IndexPage
