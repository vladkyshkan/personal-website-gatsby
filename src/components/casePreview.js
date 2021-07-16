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
import IconArrow from "./designSystem/IconArrow"
import CaseDetails from "./caseDetails"

const CaseContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1152px;
  width: 100%;
  border-radius: 20px;
  background-color: ${props => props.color};
  margin-bottom: 80px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1200px) {
    height: 450px;
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 64px;
  }
`

const CaseCover = styled.div`
  display: block;
  max-width: 662px;
  width: 100%;
  margin-left: auto;

  @media only screen and (max-width: 1200px) {
    max-width: 550px;
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`

const CaseDescription = styled.div`
  width: 448px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 1070px) {
    position: static;
    width: 100%;
    height: auto;
    padding: 48px 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 32px 0;
  }

  @media only screen and (max-width: 500px) {
    padding: 24px 0;
  }
`

const CaseDescriptionWrapper = styled.div`
  padding: 0 40px;
  color: ${props => (props.light ? theme.dark : theme.white)};

  h3:nth-of-type(1) {
    opacity: 0.3;
    margin-bottom: 40px;
  }

  button {
    margin-top: 32px;
  }

  @media only screen and (max-width: 600px) {
    h3:nth-of-type(1) {
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0 24px;
  }
`

const CasePreview = ({
  slug,
  title,
  description,
  year,
  role,
  color,
  light,
  imageData,
  index,
}) => (
  <CaseContainer color={color}>
    <CaseDescription>
      <CaseDescriptionWrapper light={light}>
        <H3>
0
{index + 1}
/
</H3>
        <H3>{description}</H3>
        <CaseDetails product={title} year={year} role={role} />
        <StyledLink to={slug}>
          <Button light={light}>
            See more
            <IconArrow />
          </Button>
        </StyledLink>
      </CaseDescriptionWrapper>
    </CaseDescription>
    <CaseCover>
      <StyledLink to={slug}>
        <Image fluid={imageData} alt={title} />
      </StyledLink>
    </CaseCover>
  </CaseContainer>
)

export default CasePreview
