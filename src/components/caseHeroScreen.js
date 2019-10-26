import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import H2 from "./designSystem/H2"

const CaseHeroScreenStyled = styled.div`
  padding: 0 5%;
  height: 80vh;
  background-color: red;
`

const CaseHeroScreen = () => (
  <CaseHeroScreenStyled>
    <H2 />
  </CaseHeroScreenStyled>
)

export default CaseHeroScreen
