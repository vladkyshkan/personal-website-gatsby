import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import Button from "./designSystem/Button"
import StyledLink from "./designSystem/StyledLink"
import H3 from "./designSystem/H3"
import H4 from "./designSystem/H4"
import IconArrow from "./designSystem/IconArrow"

const CaseNextStyled = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: content-box;
`

const CaseContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 80px;
  background-color: ${props => props.color};
  transform: scale(1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
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

  h4 {
    opacity: 0.5;
    margin-bottom: 24px;
  }

  button {
    margin-top: 32px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 24px;
  }
`

const CaseNext = ({ title, description, slug, background, image, light }) => (
  <CaseNextStyled>
    <CaseContainer color={background}>
      <CaseDescription>
        <CaseDescriptionWrapper light={light}>
          <H4>Next project</H4>
          <H3>
            {title}
{' '}
— {description}
          </H3>
          <StyledLink to={`/${slug}/`}>
            <Button light={light}>
              See more
              <IconArrow />
            </Button>
          </StyledLink>
        </CaseDescriptionWrapper>
      </CaseDescription>
      <CaseCover>
        <StyledLink to={`/${slug}/`}>
          <Image fluid={image} alt={title} />
        </StyledLink>
      </CaseCover>
    </CaseContainer>
  </CaseNextStyled>
)

export default CaseNext
