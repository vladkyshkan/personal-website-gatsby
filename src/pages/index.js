import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import About from "../components/about"
import Section from "../components/section"
import WorkGrid from "../components/workGrid"
import BooksGrid from "../components/booksGrid"
import H1 from "../components/designSystem/H1"
import H2 from "../components/designSystem/H2"
import P from "../components/designSystem/P"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />

    <About>
      <H1>Digital product designer</H1>
      <P>
        Currently I work as a Head of design at Omnicore where lead team of 5
        designers. Our goal is to create the best e-commerce experience and make
        online shopping for customers easier. You can check my résumé following
        the link.
      </P>
      <P>
        I believe that all great things happen at the intersection of
        disciplines so try to broaden my skills in various fields. Apart from
        doing design, I like to tinker with code, learn more about AI/ML, enjoy
        art & music. Based in Kyiv, Ukraine.
      </P>
    </About>

    <Section id="work">
      <H2>Selected work</H2>
      <WorkGrid />
    </Section>

    <Section dark id="projects">
      <H2>Side projects</H2>
    </Section>

    <Section>
      <H2>Favorite books</H2>
      <BooksGrid />
    </Section>
  </Layout>
)

export default IndexPage
