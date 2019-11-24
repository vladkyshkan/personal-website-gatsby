import React from "react"
import styled from "styled-components"
import { theme } from "../components/designSystem/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import H3 from "../components/designSystem/H3"
import P from "../components/designSystem/P"
import Button from "../components/designSystem/Button"
import IconArrow from "../components/designSystem/IconArrow"
import StyledLink from "../components/designSystem/StyledLink"

const HeaderBg = styled.div`
  background-color: ${theme.dark};
  height: 56px;
`

const ErrorStyled = styled.div`
  margin: -60px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  text-align: center;

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 32px;
  }
`

const ErrorTitle = styled.p`
  font-size: 16rem;
  font-family: "Butler";
  font-weight: 300;
  line-height: 100%;
  color: ${theme.dark};
  opacity: 0.2;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeaderBg />
    <ErrorStyled>
      <ErrorTitle>404</ErrorTitle>
      <H3>Page not found</H3>
      <P>The page you were looking for doesn’t exist </P>
      <StyledLink to="/">
        <Button dark>
          Back to home
          <IconArrow />
        </Button>
      </StyledLink>
    </ErrorStyled>
  </Layout>
)

export default NotFoundPage
