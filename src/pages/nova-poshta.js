import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/designSystem/globalStyle"
import CaseHeroScreen from "../components/caseHeroScreen.js"

const SecondPage = () => (
  <Layout>
    <SEO title="Nova Poshta" />
    <GlobalStyle />

    <CaseHeroScreen />
  </Layout>
)

export default SecondPage
