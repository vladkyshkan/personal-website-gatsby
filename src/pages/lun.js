/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import CaseTitle from "../components/caseTitle"
import CaseBlock from "../components/caseBlock"
import CaseBlockWide from "../components/caseBlockWide"
import CaseImage from "../components/caseImage"
import CaseImageWide from "../components/caseImageWide"
import CaseNext from "../components/caseNext"
import CaseQuote from "../components/caseQuote"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import H5 from "../components/designSystem/H5"
import P from "../components/designSystem/P"
import Wrapper from "../components/designSystem/Wrapper"

const Lun = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, role, color, light } = cases

        return (
          <Layout key={title}>
            <SEO title={title} description={description} />
            <GlobalStyle />
            <CaseTitle
              title={title}
              description={description}
              year={year}
              role={role}
              color={color}
              light={light}
              key={title}
            />
            <CaseBlock>
              <H3>Overview</H3>
              <div>
                <P>
                  LUN Misto is a social project that explores urban space,
                  analyzes open data and forms a request for a good quality of
                  life in Kyiv. They have created an interactive map where each
                  person could find researches regarding city (such as noise
                  levels, quality of air or queues at the kindergartens), but
                  this solution was difficult to scale.
                </P>
                <P bold>
                  Our task was to redesign the city comfort map, visualize data
                  in a convenient way and help people find the best place to
                  live, work and relax in Kyiv. This task was done during
                  Product Interface Design course by Projector.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image1.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlockWide gray>
              <Wrapper>
                <H3>Challenge</H3>
                <div>
                  <P>
                    After the kickoff meeting with stakeholders we defined
                    following main questions to answer during this project:
                  </P>
                  <ul>
                    <li>
                      What do people mean under the word "comfort"? How do they
                      understand whether a place is comfortable or not? What
                      criteria of comfort are important and how are they
                      defined?
                    </li>
                    <li>
                      How to show a lot of heterogeneous information on the map
                      at the same time? The previous solution works well for one
                      or two criteria but turned into a mess if many filters
                      were applied.
                    </li>
                  </ul>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage gray shadow>
              <Image fluid={data.Image2.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>Process</H3>
                <P>
                  The whole process of design during this project was divided
                  into four stages according to the Double Diamond methodology.
                </P>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage dark>
              <Image fluid={data.Image3.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlock>
              <H3>Discover</H3>
              <div>
                <P>
                  The main user of the city comfort map is a person who plans to
                  buy or rent an apartment in the nearest future. Such people
                  try to find as much information as possible regarding
                  neighborhood or house they consider to move into and the map
                  could be one of such sources.
                </P>
                <P>
                  We conducted 25 user interviews to validate our hypothesis,
                  understand how people define, prioritize and compare different
                  criteria of comfort.
                </P>
                <CaseQuote>
                  <div>
                    <Image fixed={data.Image4.childImageSharp.fixed} />
                  </div>
                  <div>
                    <P bold>
                      “For me, comfort is a combination of historical and modern
                      buildings. It is a place near the park with water, where
                      you can run, ride a skateboard or a bike.”
                    </P>
                    <H5>— Ivan</H5>
                  </div>
                </CaseQuote>
                <CaseQuote>
                  <div>
                    <Image fixed={data.Image5.childImageSharp.fixed} />
                  </div>
                  <div>
                    <P bold>
                      “The most important thing for me is logistics. I looked
                      for an apartment near transport interchange and renovated
                      metro station.”
                    </P>
                    <H5>— Valeria</H5>
                  </div>
                </CaseQuote>
              </div>
            </CaseBlock>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>Value proposition canvas</H3>
                <P>
                  Based on information collected during interviews we mapped
                  customers' pains, gains, and jobs on the Value proposition
                  canvas and started to brainstorm ideas. After that, we
                  prioritized a list of ideas based on usefulness for customers
                  and technical feasibility.
                </P>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage dark shadow>
              <Image fluid={data.Image6.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlockWide gray>
              <Wrapper>
                <H3>Prototype & test</H3>
                <P>
                  To quickly test our solutions, we created lo-fi prototypes.
                  Together with users we organize criteria of comfort into
                  categories such as infrastructure, transportation, ecology,
                  education, etc that make sense to them. When we had confidence
                  in the concepts, we began creating a visual design.
                </P>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage gray>
              <Image fluid={data.Image7.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlock>
              <H3>The solution</H3>
              <P>
                Each person has his criteria of comfort when choosing a place to
                live, work or relax. For example, some people want to live as
                close as possible to the center of the city, while others don't
                like crowds of people. The initial experience with the comfort
                map starts with onboarding, where the user can select the most
                important criteria for him. A quick tutorial following afterward
                shows the main features of the comfort map.
              </P>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image8.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <div>
                <P>
                  We figured out a system that allows showing many layers of
                  information simultaneously. According to it, all territory of
                  Kyiv should be divided into small hexagons. Each hex has color
                  from spectrum between green and red depending on indicators in
                  the area (from 0 to 10, where 0 is red, 10 is green). For
                  example, if a neighborhood has many parks within walking
                  distance, then the hex of this part of Kyiv will be green. If
                  any, then its color will be red. If the user adds several
                  filters to the comfort map, the cells will be painted in the
                  color of the arithmetic mean number of all criteria.
                </P>
                <P>
                  When the user hovers over a hex, a tooltip with detailed
                  information will appear telling the customer if this
                  neighborhood is comfortable based on applied filters.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image9.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <P>
                According to analytics, 65% of LUN Misto traffic comes from
                mobile so we designed mobile version as well.
              </P>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image10.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>Results</H3>
                <P>
                  Presented solution was highly appreciated by the LUN Misto
                  team for scalability (we developed the system that could be
                  easily used to create comfort maps for other cities of
                  Ukraine) as well as awesome UI. Results of our work were
                  included in the roadmap and will be implemented in the nearest
                  future.
                </P>
              </Wrapper>
            </CaseBlockWide>
            <CaseBlock>
              <H3>Credits</H3>
              <P>
                Co-designed with Anna Kozlova, Oleksandr Hlushchenko, Olesia
                Kaita, Taisia Shkovyra and Tanya Mytrovska
              </P>
            </CaseBlock>
            <CaseNext
              background="#EB5757"
              title="Nova Poshta"
              slug="nova-poshta"
              description="Package creation flow redesign for the delivery service"
              image={data.ImageNext.childImageSharp.fluid}
            />
          </Layout>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allCasesJson(filter: { slug: { eq: "lun" } }) {
      edges {
        node {
          title
          description
          year
          role
          color
          light
          url
        }
      }
    }
    Image1: file(relativePath: { eq: "images/cases/lun/lun-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(relativePath: { eq: "images/cases/lun/lun-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(relativePath: { eq: "images/cases/lun/lun-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(relativePath: { eq: "images/cases/lun/lun-4.png" }) {
      childImageSharp {
        fixed(width: 96, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    Image5: file(relativePath: { eq: "images/cases/lun/lun-5.png" }) {
      childImageSharp {
        fixed(width: 96, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    Image6: file(relativePath: { eq: "images/cases/lun/lun-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image7: file(relativePath: { eq: "images/cases/lun/lun-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image8: file(relativePath: { eq: "images/cases/lun/lun-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image9: file(relativePath: { eq: "images/cases/lun/lun-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image10: file(relativePath: { eq: "images/cases/lun/lun-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(relativePath: { eq: "images/cases/lun/lun-next.png" }) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Lun
