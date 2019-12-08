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
          I'm currently working as a Head of design at Omnicore where lead team
          of 5 designers. Our goal is to create the best e-commerce experience
          and make online shopping for customers easier. Before that I worked as
          a&nbsp;marketer at Microsoft. Based in Kyiv.
        </P>
        <P>
          I believe that all great things happen at the intersection of
          disciplines so try to broaden my skills in various fields. Apart from
          doing design, I like to tinker with code and learn more about AI/ML.
          Feel free to contact me with any questions.
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
