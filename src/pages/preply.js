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
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import H3 from "../components/designSystem/H3"
import P from "../components/designSystem/P"
import Wrapper from "../components/designSystem/Wrapper"

const Preply = ({ data }) => {
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
                  Preply is a global marketplace for online language learning.
                  The company's mission is to build an innovative learning space
                  that connects students and tutors.
                </P>
                <P bold>
                  Our task was to rethink and improve messenger to help tutors
                  search and reply to students easier and faster. As a result it
                  will increase retention of students and tutors earnings. This
                  task was done during Product Interface Design course by
                  Projector.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image1.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlockWide gray>
              <Wrapper>
                <H3>Platform audit</H3>
                <P>
                  As a first step, we analysed the platform — we were tutors, we
                  were students, we went through every flow and use case
                  described by business. Preply platform has thousands active
                  users, so it was important not to break interface they got
                  accustomed to. We created a business process diagram that
                  helped us understand where and how exactly our decisions could
                  affect the product.
                </P>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage gray shadow>
              <Image fluid={data.Image2.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlock>
              <H3>International research</H3>
              <div>
                <P>
                  To understand how tutors currently communicate with their
                  students and validate hypotheses from business we conducted a
                  set of interviews with tutors from around the world (Germany,
                  Spain, Israel, Australia and South Africa). Key insights
                  include:
                </P>
                <ul>
                  <li>
                    Tutors send the same messages for common questions over and
                    over again, but don't like copy-paste and consider that
                    students deserve personalised reply;
                  </li>
                  <li>
                    Often tutors look for students through the calendar, and
                    then write them through the messenger;
                  </li>
                  <li>
                    Some tutors have database in Excel/Google Sheets with all
                    info about students such as level, schedule, materials etc.
                  </li>
                </ul>
              </div>
            </CaseBlock>
            <CaseImage>
              <Image fluid={data.Image3.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>Problem framing</H3>
                <div>
                  <P>
                    After analysis and research we understood the context of
                    communication better. When does a tutor need to find a
                    specific student or use templates? How does a student feel
                    when he receive messages from a tutor? What kind of messages
                    does a student expect to get from a tutor?
                  </P>
                  <P>
                    And finally we identified the main problem to solve — how
                    might we make communication between tutors and students fast,
                    timely and effective? So that every tutor's request ends with
                    student's action.
                  </P>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseBlock>
              <H3>Search and labels</H3>
              <div>
                <P>
                  A lot of tutors have dozens of active students they work with.
                  Often they need to quickly find a specific student and do one
                  of the following actions:
                </P>
                <ul>
                  <li>Remind to confirm a lesson;</li>
                  <li>Remind to book a next lesson;</li>
                  <li>Send learning materials;</li>
                  <li>Give feedback;</li>
                  <li>Nudge to buy packages.</li>
                </ul>
                <P>
                  To save tutors time and increase their efficiency we added a
                  system of tags that shows students current status. The most
                  important tag is "not confirmed", since the tutor's earnings
                  depend on it. Now she doesn't need to switch to other tabs to
                  look for students who haven't yet confirmed the lessons. Other
                  tags include "not booked", "package ends" and "trial passed".
                  As well, we added a search to the Preply messenger where one
                  can find a specific students or filter them by status.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image4.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>Quick actions</H3>
              <div>
                <P>
                  Messenger is the main place of communication between a student
                  and a tutor. And right now the problem is that for the most
                  actions one should leave it and go to other sections of the
                  platform. We decided to add key actions directly to the
                  messenger so the users could have access to them in the right
                  place at the right time.
                </P>
                <P>
                  For example, if the student didn't confirm the last lesson, the
                  system offers to do so. The tutor can attach a button to the
                  message and the student can confirm the lesson by clicking on it
                  right here in the messenger.
                </P>
                <P>
                  If the student didn't book the next lesson, we as well suggest
                  doing it. The tutor could select the date and send it, and the
                  student can confirm or change the date. And if the student runs
                  out of a package, the tutor could offer to buy it directly in
                  the chat.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image5.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>Smart responses</H3>
              <div>
                <P>
                  During interviews the respondents said they didn't keep prepared
                  templates for quick responses. And they always emphasized on the
                  "personalization" of messages. However, it turned out that the
                  tutors replied to the students with typical messages that they
                  keep in their mind. They just didn't call it "a template"
                  because they could change it (for example, substitute students'
                  name). In their understanding, a template is something static
                  and immutable.
                </P>
                <P>
                  Our solution is to show the tutor her typical answer at the
                  right moment (without any new buttons, pages or windows in the
                  interface). For example, if the tutor responded to the third
                  student with the same status with similar message, then when she
                  opens a chat with the fourth student the system would
                  automatically put this message (with correct student name) right
                  in the input field. The tutor should only check it and send.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image6.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>All in one place</H3>
              <div>
                <P>
                  We expanded the possibilities of the right panel of the
                  messenger, and brought to the fore what is really important —
                  the calendar, learning materials and student details. Many use
                  cases of using the messenger are associated with booking and
                  confirming the lesson. Therefore, the teacher sees an open
                  calendar by default.
                </P>
                <P>
                  All the materials that the student and the teacher have ever
                  exchanged could be found at the library tab. Here the tutor
                  could see the topic and understand which scope has already been
                  discussed. Judging by the interviews, this was important for the
                  tutors.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image7.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>How to measure results</H3>
                <div>
                  <P>
                    To measure effectiveness of proposed solution we defined
                    following metrics:
                  </P>
                  <ul>
                    <li>GMV per tutor;</li>
                    <li>LTV of student;</li>
                    <li>Hours purchased per tutor;</li>
                    <li>Hours completed per tutor;</li>
                    <li>Conversion to paid.</li>
                  </ul>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseBlock>
              <H3>Credits</H3>
              <P>
                Co-designed with Liza Hryshenchuk, Olesia Kaita, Igor Dudnyk,
                Oleksandr Hlushchenko, Oleksandr Kansky, Dmitriy Muzychka
              </P>
            </CaseBlock>
            <CaseNext
              background="#EAE2D8"
              title="MD Fashion"
              slug="md-fashion"
              description="Apparel marketplace redesign and Android application"
              image={data.ImageNext.childImageSharp.fluid}
              light="true"
            />
          </Layout>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allCasesJson(filter: { slug: { eq: "preply" } }) {
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
    Image1: file(relativePath: { eq: "images/cases/preply/preply-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(relativePath: { eq: "images/cases/preply/preply-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(relativePath: { eq: "images/cases/preply/preply-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(relativePath: { eq: "images/cases/preply/preply-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(relativePath: { eq: "images/cases/preply/preply-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image6: file(relativePath: { eq: "images/cases/preply/preply-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image7: file(relativePath: { eq: "images/cases/preply/preply-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/preply/preply-next.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Preply
