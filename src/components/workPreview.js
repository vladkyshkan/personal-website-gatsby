/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import Button from "./designSystem/Button"
import StyledLink from "./designSystem/StyledLink"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"
import IconArrow from "./designSystem/IconArrow"

const WorkContainer = styled.div`
  position: relative;
  margin-bottom: 160px;
`

const WorkCover = styled.div`
  max-width: 832px;
`

const WorkDescription = styled.div`
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

const WorkDescriptionWrapper = styled.div`
  padding: 0 40px;
  color: ${props => (props.light ? theme.dark : theme.white)};

  h3:nth-of-type(1) {
    opacity: 0.3;
    margin-bottom: 40px;
  }
`

const WorkDetails = styled.div`
  display: flex;
  margin: 24px 0 40px 0;
`

const WorkDetailsTitle = styled.div`
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

const WorkPreview = ({
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
  <WorkContainer>
    <Link to={`/${slug}/`}>
      <WorkCover>
        <Image fluid={imageData} alt={title} />
      </WorkCover>
    </Link>
    <WorkDescription color={color} right={right}>
      <WorkDescriptionWrapper light={light}>
        <H3>0{index + 1}/</H3>
        <H3>{description}</H3>
        <WorkDetails>
          <WorkDetailsTitle>
            <P>Client</P>
            {client}
          </WorkDetailsTitle>
          <WorkDetailsTitle>
            <P>Year</P>
            {year}
          </WorkDetailsTitle>
          <WorkDetailsTitle>
            <P>Company</P>
            {company}
          </WorkDetailsTitle>
        </WorkDetails>
        {light ? (
          <Button light>
            <StyledLink to={`/${slug}/`}>See more</StyledLink>
            <IconArrow />
          </Button>
        ) : (
          <Button>
            <StyledLink to={`/${slug}/`}>See more</StyledLink>
            <IconArrow />
          </Button>
        )}
      </WorkDescriptionWrapper>
    </WorkDescription>
  </WorkContainer>
)

export default WorkPreview
