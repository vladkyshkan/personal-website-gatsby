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
import Button from "../components/designSystem/Button"
import IconArrow from "../components/designSystem/IconArrow"
import ExternalLink from "../components/designSystem/ExternalLink"

const Zakaz = ({ data }) => {
  const cases = data.allCasesJson.edges

  return (
    <div>
      {cases.map(({ node: cases }) => {
        const { title, description, year, role, color, light, url } = cases

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
                  Zakaz.ua is the largest grocery delivery service in Ukraine partnering with 13 retailers and covering 15 biggest cities as well as working in two other countries (Moldova, Uzbekistan).
                </P>
                <P bold>
                  I joined the team as a single product designer responsible for user experience across iOS, Android and Web. Since the product has already existed, my main task was to improve it and create new features to achieve business goals.
                </P>
                <ExternalLink href={url} target="_blank" rel="noopener">
                  <Button light="false">
                    Visit website
                    <IconArrow />
                  </Button>
                </ExternalLink>
                <ExternalLink
                  href="https://apps.apple.com/ua/app/id1460374584?l=en"
                  target="_blank"
                  rel="noopener"
                >
                  <Button light="false">
                    Download app
                    <IconArrow />
                  </Button>
                </ExternalLink>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image1.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlockWide gray>
              <Wrapper>
                <H3>Starting user research</H3>
                <div>
                  <P>
                    Although Zakaz was founded in 2010, there was no full picture of the target audience. When I joined the company, I conducted a lot of user research interviews as well as usability testing of existing product to understand main problems and identify insights. All this information was organised into a knowledge base in Airtable to share across different departments.
                  </P>
                  <P>
                    Later based on research we together with UX researcher and Product managers created user personas and CJMs to map flows and find main blockers.
                  </P>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage gray>
              <Image fluid={data.Image2.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlock>
              <H3>Notification center and chat with a picker</H3>
              <div>
                <P>
                  Zakaz mobile apps had basic functionality after the launch. For example, all communication with clients regarding orders, payments or substitutes went through SMS. This channel was expensive in terms of business and inconvenient for our users, because they often missed messages or thought that it was spam.
                </P>
                <P>
                  My first major task was to create in-app notification center that could be a single place to review messages regarding orders. During second iteration we added a chat so customers could reply to questions from the pickers without leaving the app.
                </P>
                <P>
                  Majority of orders have questions about replacements. So we decided to make a notification center a separate section in a tab bar. It allows users to have a quick access to other parts of the app such as catalogue or favourites to find a replacement for unavailable item when chatting with a picker.
                </P>
                <P bold>
                  As a result, the company decreased spendings for SMS per one user for 50%.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image3.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>Edit an order</H3>
              <div>
                <P>
                  Around 20% of requests to the contact center were to add or replace some items in the already placed order. And during interviews a lot of people confirmed that they often missed an item or two when ordering groceries. With that in mind, we started to work on the ability to edit an order through the interface.
                </P>
                <P>
                  Initially, we wanted to reuse familiar flow when a customer added items to the cart and later moved them to the active order. But this approach had several limitations and confused our users. Moreover, during interviews we identified that customers didn't need full-fledged catalogue to find and add one or two items.
                </P>
                <P>
                  That's why we decided to move forward with the concept of a search and keep all logic of order editing at the order details page. Here a customer could see current stage of the order, add new items, edit existing ones, or cancel order at all. Everything could be done through the interface without help from the customer service.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image4.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <P>
                During design process I defined a lot of exceptions and corner cases. I divided them in two buckets: one that required an immediate action from the user (ex. if a customer deletes a last item of the order, it will be automatically canceled) and another one that didn't (ex. a customer can't add alcohol to the order that would be paid by a card).
              </P>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image5.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <P>
                To make all experience consistent, we launched the edit an order feature simultaneously for web and apps.
              </P>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image6.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <div>
                <P>
                  In order to increase adoption of the feature we made banners at the thank you page and in the order confirmation e-mail. Also we showed information about nearest order at the main page with appropriate actions for each stage of the order (edit or add new items when order was confirmed, pay for the order when it was collected etc) so customers could see the most important details immediately after opening the website or the app.
                </P>
                <P bold>
                  The edit an order feature Increased average check for 7%.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image7.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>New search</H3>
              <div>
                <P>
                  Search always was one of the most vital part of the service, but we received a lot of complaints about its work. So the team decided to rebuild it using new algorithm as well as update design.
                </P>
                <P>
                  Previously when a user typed a query in the search input, he received a list of text hints by clicking on which he got to a results page. In a new version we show 5 most relevant items so a customer could add them without going to another page. It allows to speed up workflow and make a shopping cart filling quicker.
                </P>
                <P>
                  Often users don't know what item exactly they are looking for or in which category they could find it. For such broad queries we show a list of matching categories. As a final touch, we added a keyboard support for advanced users so it is possible to move through items and categories with arrow keys and open them with Enter key.
                </P>
                <P bold>
                  Today almost every third customer uses search to fill a shopping cart while the number of complaints drastically decreased.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image8.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>Replace out of stock items</H3>
              <div>
                <P>
                  Previously customers often had the problem that a lot of items became unavailable before checkout. The assortment file changed several times per day, so if the goods were out of stock a customer had nothing to do but to delete them. The problem was solved with the replacement feature. We reused existing algorithm and showed users the items with similar characteristics.
                </P>
                <P bold>
                  Now customers replace about 12,000 products per month in 2 clicks, instead of long searches for the alternative in the catalogue.
                </P>
              </div>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image9.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
              <H3>Component library</H3>
                <P>
                  As the product evolved, the number of design elements, components and views increased. We built a Figma library and my task was to maintain and contribute to it as well as working with developers on implementing it in code.
                </P>
            </CaseBlock>
            <CaseImageWide>
              <Image fluid={data.Image10.childImageSharp.fluid} />
            </CaseImageWide>
            <CaseBlock>
                <P bold>
                  The above represents only a part of what I have accomplished as a Product Designer at Zakaz.ua. I joined the company not long after the outbreak of COVID-19, when our services were very demanded. During that time <ExternalLink
                href="https://retailers.ua/news/menedjment/11974-forbes-oborot-zakazua-v-2020-godu-dostig-85-mln"
                target="_blank"
                rel="noopener"
                color={color}
              >Zakaz.ua grew for 200%</ExternalLink> and my professional experience grew along with it.
                </P>
            </CaseBlock>
            <CaseBlockWide gray>
              <Wrapper>
                <H3>Users reviews</H3>
                <div>
                  <P>
                    Currently Zakaz mobile apps are some of the most rated apps in the Food & Drink category in the App Store (4.9 stars) and Google Play Market (4.8 stars). Below are some recent customer reviews.
                  </P>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseImage gray>
              <Image fluid={data.Image11.childImageSharp.fluid} />
            </CaseImage>
            <CaseBlockWide dark>
              <Wrapper>
                <H3>Switch into Product Management</H3>
                <div>
                  <P>
                    Later I got a chance to try myself in a product management role. I was responsible for iOS and Android mobile apps and my tasks included creating short- and long-term roadmap, sprints planning, tracking metrics, managing stakeholders as well as working with the team on designing and releasing new features.
                  </P>
                  <P>
                    It was a great experience and I learned a lot about product development cycle and business aspects of the product.
                  </P>
                </div>
              </Wrapper>
            </CaseBlockWide>
            <CaseBlock>
              <H3>Credits</H3>
              <P>
              Product Designer: Vlad Kyshkan <br />
              Product Manager (Mobile apps): Dmytro Valovyj <br />
              Product Manager (Web): Vadym Novoseletskiy <br />
              UX Researcher: Valeriia Korolova <br />
              Business Analytic: Denys Zaliepaev
              </P>
            </CaseBlock>
            <CaseNext
              background="#42B3BC"
              title="Preply"
              slug="preply"
              description="Improve messenger for the language learning marketplace"
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
    allCasesJson(filter: { slug: { eq: "zakaz" } }) {
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
    Image1: file(relativePath: { eq: "images/cases/zakaz/zakaz-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image2: file(relativePath: { eq: "images/cases/zakaz/zakaz-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image3: file(relativePath: { eq: "images/cases/zakaz/zakaz-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image4: file(relativePath: { eq: "images/cases/zakaz/zakaz-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image5: file(relativePath: { eq: "images/cases/zakaz/zakaz-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image6: file(relativePath: { eq: "images/cases/zakaz/zakaz-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image7: file(relativePath: { eq: "images/cases/zakaz/zakaz-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image8: file(relativePath: { eq: "images/cases/zakaz/zakaz-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image9: file(relativePath: { eq: "images/cases/zakaz/zakaz-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image10: file(relativePath: { eq: "images/cases/zakaz/zakaz-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Image11: file(relativePath: { eq: "images/cases/zakaz/zakaz-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageNext: file(
      relativePath: { eq: "images/cases/zakaz/zakaz-next.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 844, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Zakaz
