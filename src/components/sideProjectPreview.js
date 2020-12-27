import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { theme } from "./designSystem/theme"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"
import ExternalLink from "./designSystem/ExternalLink"
import Button from "./designSystem/Button"
import IconArrow from "./designSystem/IconArrow"

const SideProjectsPreviewStyled = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 64px;
  align-items: center;

  :nth-child(1) {
    margin-top: 0;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`

const SideProjectsDescription = styled.div`
  h3 {
    color: ${theme.accent};
    margin-bottom: 8px;
  }

  p {
    color: ${theme.accent};
    margin-bottom: 32px;
    max-width: 720px;
  }

  a {
    margin-right: 0;
  }

  @media only screen and (max-width: 1024px) {
    p {
      margin-bottom: 24px;
    }
  }
`

const SideProjectsCover = styled.div`
  @media only screen and (max-width: 1024px) {
    margin-bottom: 24px;
    max-width: 600px;
  }
`

const SideProjectsPreview = ({ title, description, url, image}) => (
  <SideProjectsPreviewStyled>
    <SideProjectsCover>
      <Image fluid={image} alt={title} />
    </SideProjectsCover>
    <SideProjectsDescription>
      <H3>{title}</H3>
      <P>{description}</P>
      <ExternalLink key={title} href={url} target="_blank" rel="noopener">
        <Button>
          Visit website
          <IconArrow />
        </Button>
      </ExternalLink>
    </SideProjectsDescription>
  </SideProjectsPreviewStyled>
)

export default SideProjectsPreview
