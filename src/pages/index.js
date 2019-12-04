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
import P from "../components/designSystem/P"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />

    <Bio>
      <Wrapper>
        <H1>Digital product designer</H1>
        <P>
          Currently I work as a Head of design at{" "}
          <a href="https://theomnicore.com" target="_blank" rel="noopener">
            Omnicore
          </a>{" "}
          where lead team of 5 designers. Our goal is to create the best
          e-commerce experience and make online shopping for customers easier.
          You can take a look at{" "}
          <a href="test" target="_blank" rel="noopener">
            my résumé
          </a>{" "}
          or contact me via{" "}
          <a href="mailto:vladkyshkan@gmail.com" target="_blank" rel="noopener">
            mail
          </a>
          .
        </P>
        <P>
          I believe that all great things happen at the intersection of
          disciplines so try to broaden my skills in various fields. Apart from
          doing design, I like to tinker with code, learn more about AI/ML,
          enjoy art & music. Based in Kyiv, Ukraine.
        </P>
      </Wrapper>
    </Bio>

    <Section>
      <Wrapper>
        <H2 id="work">Selected work</H2>
        <CaseGrid />
      </Wrapper>
    </Section>

    <Section dark>
      <Wrapper>
        <H2 id="projects">Side projects</H2>
        <SideProjectsGrid />
      </Wrapper>
    </Section>

    <Section>
      <Wrapper>
        <H2>Favorite books</H2>
        <BooksGrid />
      </Wrapper>
    </Section>
  </Layout>
)

export default IndexPage
