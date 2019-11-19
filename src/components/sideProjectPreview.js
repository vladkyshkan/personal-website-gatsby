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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
`

const SideProjectsDescription = styled.div`
  align-self: self-end;

  h3 {
    color: ${theme.accent};
    margin-bottom: 16px;
  }

  p {
    color: ${theme.accent};
    margin-bottom: 48px;
  }
`

const SideProjectsCover = styled.div`
  padding-top: ${props => (props.down ? "40px" : null)};
`

const SideProjectsPreview = ({ title, description, link, image1, image2 }) => (
  <SideProjectsPreviewStyled>
    <SideProjectsDescription>
      <H3>{title}</H3>
      <P>{description}</P>
      <ExternalLink key={title} href={link} target="_blank" rel="noopener">
        <Button>
          Visit website
          <IconArrow />
        </Button>
      </ExternalLink>
    </SideProjectsDescription>
    <SideProjectsCover>
      <Image fluid={image1} alt={title} />
    </SideProjectsCover>
    <SideProjectsCover down>
      <Image fluid={image2} alt={title} />
    </SideProjectsCover>
  </SideProjectsPreviewStyled>
)

export default SideProjectsPreview
