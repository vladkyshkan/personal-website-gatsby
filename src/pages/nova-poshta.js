/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import CaseTitle from "../components/caseTitle"
import CaseContent from "../components/caseContent"
import CaseBlock from "../components/caseBlock"
import CaseBlockWide from "../components/caseBlockWide"
import CaseImage from "../components/caseImage"
import CaseImageWide from "../components/caseImageWide"
import CaseQuote from "../components/caseQuote"
import CaseNext from "../components/caseNext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import H4 from "../components/designSystem/H4"
import H5 from "../components/designSystem/H5"
import P from "../components/designSystem/P"
import Captcha from "../components/designSystem/Captcha"
import StyledLink from "../components/designSystem/StyledLink"
import Wrapper from "../components/designSystem/Wrapper"

const NovaPoshta = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, company, color, light } = cases
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
                    Nova Poshta is the largest express delivery service for
                    documents and packages for businesses and individuals in
                    Ukraine. One of the company's main goal is to increase % of
                    people that use its digital services (and thereby spend less
                    time at the departments) so the company could cut business
                    costs and invest them in other projects.
                  </P>
                  <P bold>
                    Our task was to redesign a package creation flow in mobile
                    application and in such a way increase percentage of
                    packages created online to reduce load on departments. This
                    task was done during 5-day Product design course by Apollo
                    Design Center.
                  </P>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image1.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Research methods</H3>
                <div>
                  <P>
                    To achieve business goals, we have to deeply understand
                    constraints, problems and user needs. Our team used several
                    research methods to gain these insights including:
                  </P>
                  <ul>
                    <li>Stakeholder interview;</li>
                    <li>2 customer interviews;</li>
                    <li>4 Customer Journey Maps;</li>
                    <li>18 user tests (including 5 field tests);</li>
                    <li>4 paper and 3 digital prototypes.</li>
                  </ul>
                </div>
              </CaseBlock>
              <CaseImage>
                <Image fluid={data.Image2.childImageSharp.fluid} />
              </CaseImage>
              <CaseBlockWide gray>
                <Wrapper>
                  <H3>Stakeholder interview</H3>
                  <div>
                    <P>
                      A first step in gathering information about business and
                      its needs. We interviewed Artem Volkhonskyi (Head of
                      Digital Product Development), who shared with us company's
                      long-term goals, business insights, user segments and
                      their usage patterns. Some of them are following:
                    </P>
                    <ul>
                      <li>
                        Package size, not weight, is the most important
                        parameter for transportation;
                      </li>
                      <li>
                        An absolute majority of customers use the same
                        department of Nova Poshta both for sending and receiving
                        packages;
                      </li>
                      <li>
                        Description of the package is important for
                        determination of compensation for package loss or
                        damaging.
                      </li>
                    </ul>
                  </div>
                </Wrapper>
              </CaseBlockWide>
              <CaseBlock>
                <H3>Customer interviews</H3>
                <div>
                  <P>
                    Having collected business needs and problems, we wanted to
                    see how users actually interact with Nova Poshta mobile app
                    and what problems they encounter on the way. Luckily for us,
                    Nova Poshta has great customer base and several users
                    happily accepted our offer to take part in the research.
                  </P>
                  <P>
                    Firstly, we asked customers to tell more about their
                    experience with Nova Poshta: when and how they used it. This
                    greatly expanded our understanding of usage patterns and
                    feelings customers have. Afterward, we gave them the
                    existing application and asked to go through the specific
                    package creation flow. Although we had some ideas of what
                    problems users might have, observing real users interact
                    with the app was an eye-opening experience and revealed
                    non-obvious friction points.
                  </P>
                  <CaseQuote>
                    <div>
                      <Image fixed={data.Image3.childImageSharp.fixed} />
                    </div>
                    <div>
                      <P bold>
                        “I’m not sure what I should do next after I have created
                        a package through the application.”
                      </P>
                      <H5>— Nataliia</H5>
                    </div>
                  </CaseQuote>
                </div>
              </CaseBlock>
              <CaseBlockWide gray>
                <Wrapper>
                  <H3>Customer journey mapping</H3>
                  <P>
                    Based on the customer interviews, we have identified key
                    actions users take in the package registration, what
                    thoughts and emotions they have, and identified
                    opportunities for improvement. To summarize collected
                    information, we have created Customer Journey Maps for each
                    of our personas. This helped our team to keep us on the same
                    page, as well as enhanced understanding and buy-in from
                    stakeholders and customers as we presented results of our
                    work.
                  </P>
                </Wrapper>
              </CaseBlockWide>
              <CaseImage gray shadow>
                <Image fluid={data.Image4.childImageSharp.fluid} />
              </CaseImage>
              <CaseBlockWide dark>
                <Wrapper>
                  <H3>Insights</H3>
                  <div>
                    <P>Key problems that our team has discovered included:</P>
                    <ul>
                      <li>Long and daunting flow of package registration;</li>
                      <li>
                        Poor discoverability of this feature within Nova Poshta
                        services;
                      </li>
                      <li>
                        Users don't know how to measure package size correctly;
                      </li>
                      <li>
                        Little incentives to use mobile application versus
                        onsite registration.
                      </li>
                    </ul>
                  </div>
                </Wrapper>
              </CaseBlockWide>
              <CaseBlockWide gray>
                <Wrapper>
                  <H3>Early concepts</H3>
                  <div>
                    <P>
                      In prototyping stage, we applied all of the gathered
                      insights to build more user-friendly and simple
                      experience. Initially, our team had too many ideas for
                      improvement to focus on, so we drafted 4 quick paper
                      prototypes and quickly tested several design hypothesis
                      including following:
                    </P>
                    <ul>
                      <li>
                        Should we divide the whole process of package creation
                        into small steps or vice versa combine similar fields
                        into one logical part?;
                      </li>
                      <li>
                        Should users explicitly select department to ship
                        package (or city is enough)?;
                      </li>
                      <li>
                        How could we assist users to measure package size by
                        themselves? Should they indicate weight of package?
                      </li>
                    </ul>
                    <P>
                      On the second stage, we moved to a digital prototype,
                      testing several variations of it. That allowed us to
                      improve user experience and understanding even further.
                      Main questions we wanted to get answer to:
                    </P>
                    <ul>
                      <li>
                        Does the whole flow feel smooth or there are any
                        difficulties with contacts, package or payment?;
                      </li>
                      <li>
                        Is it clear enought for the users what to do next after
                        they have created new package in the mobile app?
                      </li>
                    </ul>
                  </div>
                </Wrapper>
              </CaseBlockWide>
              <CaseImage gray>
                <Image fluid={data.Image5.childImageSharp.fluid} />
              </CaseImage>
              <CaseBlock>
                <H3>The solution</H3>
                <P>
                  Below you could find the solution itself. We have redesigned
                  homescreen of the Nova Poshta app and made key actions the
                  most noticable elements of the screen. Moreover, the app could
                  indicate the user's location so he shouldn't do this manually
                  during package creation flow. There is feed of send and
                  received packages on the bottom of the screen so the user
                  could easily access them and check their status.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image6.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>Package creation</H3>
                <div>
                  <P>
                    The whole process of package creation through app is divided
                    into several parts and made in a form of conversation. To
                    send a package the user should answer same questions as at
                    the department: who is the recipient of the package? What do
                    you want to send? Who and how will pay for the delivery?
                  </P>
                  <P>
                    At the first stage, the user could enter recipient's name or
                    phone number, and if there is match in the Nova Poshta user
                    database, all contact information would fill in
                    automatically. Usually person receives his packages from the
                    same department, and app will show it.
                  </P>
                </div>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image7.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <P>
                  At the second step, the user should fill in all information
                  about item he wants to send. All packages shipped by Nova
                  Poshta could be divided into several categories and app shows
                  the most popular ones so the user shouldn't type description
                  of package over and over again.
                </P>
                <P>
                  During interviews people told us that the biggest problem
                  during creation of package through app is that they didn't
                  know how to measure package size. To solve this problem, we
                  decided to add benchmarks (items that everyone has at home) to
                  compare with package.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image8.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <P>
                  After the user has filled and reviewed details of shipment, he
                  gets to the payment step. There he can see how the total price
                  sums up and choose payment method: online via card, at the
                  department or indicate the recipient as a payer.
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image9.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <P>
                  When the consignment note was successfully created, we tell
                  users what they should do next to send their package (come to
                  any Nova Poshta department and show client card to operator)
                  and nudge them to do secondary actions (find nearest
                  department or call courier).
                </P>
              </CaseBlock>
              <CaseImageWide>
                <Image fluid={data.Image10.childImageSharp.fluid} />
              </CaseImageWide>
              <CaseBlock>
                <H3>User Tests</H3>
                <P>
                  With the digital prototypes on hand, we have conducted the
                  last stage of user testing with invited customers, as well as
                  field testing. Field tests showed that the new package
                  registration flow is indeed intuitive and seamless.
                </P>
              </CaseBlock>
              <CaseImage>
                <Image fluid={data.Image11.childImageSharp.fluid} />
              </CaseImage>
              <CaseBlockWide dark>
                <Wrapper>
                  <H3>Results</H3>
                  <P>
                    Results of user research were presented to Nova Poshta and
                    included clickable prototype and list of suggested
                    improvements for the registration flow verified by user
                    tests. Proposed changes were well-received by Nova Poshta
                    management and is taken into account in the redesign of
                    existing application.
                  </P>
                </Wrapper>
              </CaseBlockWide>
              <CaseBlock>
                <H3>Credits</H3>
                <P>
                  Co-designed with Yana Bilyk, Dmitriy Kovalenko and Timur
                  Kolesnik
                </P>
              </CaseBlock>
              <StyledLink to="/wizard">
                <CaseNext background="#008990">
                  <Wrapper>
                    <Captcha>Next project</Captcha>
                    <H4>
                      Corporate website & b2b platform for the sanitary ware
                      supplier
                    </H4>
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
    allCasesJson(filter: { slug: { eq: "nova-poshta" } }) {
      edges {
        node {
          title
          description
          year
          company
          color
          light
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
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
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
    Image3: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-3.png" }
    ) {
      childImageSharp {
        fixed(width: 96, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    Image4: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-4.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 928, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-5.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 928, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image6: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-6.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image7: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-7.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image8: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-8.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image9: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-9.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image10: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-10.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image11: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-11.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 928, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/nova-poshta/nova-poshta-next.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NovaPoshta
