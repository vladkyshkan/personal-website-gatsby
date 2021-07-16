import React from "react"
import styled from "styled-components"
import P from "./designSystem/P"

const CaseDetailsStyled = styled.div`
  display: flex;
  margin: 24px 0 10px 0;
`

const CaseDetailsTitle = styled.div`
  font-size: 16px;
  line-height: 125%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  p {
    opacity: 0.5;
    margin: 0 0 8px 0;
    line-height: 100%;
  }

  @media only screen and (max-width: 500px) {
    margin-right: 24px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`
const CaseDetails = ({ product, year, role }) => (
  <CaseDetailsStyled>
    <CaseDetailsTitle>
      <P>Product</P>
      {product}
    </CaseDetailsTitle>
    <CaseDetailsTitle>
      <P>Year</P>
      {year}
    </CaseDetailsTitle>
    <CaseDetailsTitle>
      <P>Role</P>
      {role}
    </CaseDetailsTitle>
  </CaseDetailsStyled>
)

export default CaseDetails
