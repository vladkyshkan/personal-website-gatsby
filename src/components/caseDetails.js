import React from "react"
import styled from "styled-components"
import P from "./designSystem/P"

const CaseDetailsStyled = styled.div`
  display: flex;
  margin: 24px 0 40px 0;
`

const CaseDetailsTitle = styled.div`
  font-size: 14px;
  line-height: 100%;
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
`
const CaseDetails = ({ client, year, company }) => (
  <CaseDetailsStyled>
    <CaseDetailsTitle>
      <P>Client</P>
      {client}
    </CaseDetailsTitle>
    <CaseDetailsTitle>
      <P>Year</P>
      {year}
    </CaseDetailsTitle>
    <CaseDetailsTitle>
      <P>Company</P>
      {company}
    </CaseDetailsTitle>
  </CaseDetailsStyled>
)

export default CaseDetails
