/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import Button from "./designSystem/Button"
import StyledLink from "./designSystem/StyledLink"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"
import IconArrow from "./designSystem/IconArrow"

const CaseContainer = styled.div`
  position: relative;
  margin-bottom: 120px;
  display: flex;
`

const CaseCover = styled.div`
  display: block;
  max-width: 832px;
  width: 100%;
  margin-left: ${props => (props.right ? undefined : "auto")};
`

const CaseDescription = styled.div`
  position: absolute;
  right: ${props => (props.right ? "0px" : undefined)};
  left: ${props => (props.right ? undefined : "0px")};
  top: ${props => (props.right ? "40px" : undefined)};
  bottom: ${props => (props.right ? undefined : "40px")};
  width: 448px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.color};
`

const CaseDescriptionWrapper = styled.div`
  padding: 0 40px;
  color: ${props => (props.light ? theme.dark : theme.white)};

  h3:nth-of-type(1) {
    opacity: 0.3;
    margin-bottom: 40px;
  }
`

const CaseDetails = styled.div`
  display: flex;
  margin: 24px 0 40px 0;
`

const CaseDetailsTitle = styled.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  p {
    opacity: 0.5;
    margin: 0 0 8px 0;
    line-height: 100%;
  }
`

const CasePreview = ({
  slug,
  title,
  description,
  client,
  year,
  company,
  color,
  light,
  imageData,
  index,
  right,
}) => (
  <CaseContainer>
    <CaseCover right={right}>
      <Image fluid={imageData} alt={title} />
    </CaseCover>
    <CaseDescription color={color} right={right}>
      <CaseDescriptionWrapper light={light}>
        <H3>
0
{index + 1}
/
</H3>
        <H3>{description}</H3>
        <CaseDetails>
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
        </CaseDetails>
        {light ? (
          <StyledLink to={`/${slug}/`}>
            <Button light>
              See more
              <IconArrow />
            </Button>
          </StyledLink>
        ) : (
          <StyledLink to={`/${slug}/`}>
            <Button>
              See more
              <IconArrow />
            </Button>
          </StyledLink>
        )}
      </CaseDescriptionWrapper>
    </CaseDescription>
  </CaseContainer>
)

export default CasePreview
