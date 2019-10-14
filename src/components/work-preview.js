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

const WorkContainer = styled.div`
  position: relative;
  margin-bottom: 160px;
`

const WorkCover = styled.div`
  max-width: 832px;
`

const WorkDescription = styled.div`
  position: absolute;
  right: 0px;
  top: 40px;
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
`

const WorkDetails = styled.div`
  display: flex;
  margin: 24px 0 64px 0;
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
}) => (
  <WorkContainer>
    <Link to={`/${slug}/`}>
      <WorkCover>
        <Image fluid={imageData} alt={title} />
      </WorkCover>
    </Link>
    <WorkDescription color={color}>
      <WorkDescriptionWrapper light={light}>
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
        <Button>
          <StyledLink to={`/${slug}/`}>See more</StyledLink>
        </Button>
      </WorkDescriptionWrapper>
    </WorkDescription>
  </WorkContainer>
)

export default WorkPreview
