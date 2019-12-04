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
  position: relative;
  margin-bottom: 128px;
  display: flex;

  @media only screen and (max-width: 1024px) {
    display: block;
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 64px;
  }
`

const CaseCover = styled.div`
  display: block;
  max-width: 832px;
  width: 100%;
  margin-left: ${props => (props.right ? undefined : "auto")};

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
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

  @media only screen and (max-width: 1024px) {
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

    button {
      margin-top: 16px;
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
        <H3>0{index + 1}/</H3>
        <H3>{description}</H3>
        <CaseDetails client={title} year={year} company={company} />
        {light ? (
          <StyledLink to={`/${slug}/`}>
            <Button dark>
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
