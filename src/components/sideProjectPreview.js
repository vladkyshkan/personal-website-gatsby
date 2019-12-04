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

  @media only screen and (max-width: 900px) {
    display: block;
  }
`

const SideProjectsDescription = styled.div`
  h3 {
    color: ${theme.accent};
    margin-bottom: 16px;
  }

  p {
    color: ${theme.accent};
    margin-bottom: 48px;
  }

  h3:nth-of-type(1) {
    opacity: 0.3;
    margin-bottom: 40px;
  }

  a {
    margin-right: 0;
  }

  @media only screen and (max-width: 600px) {
    h3:nth-of-type(1) {
      margin-bottom: 24px;
    }
  }
`

const SideProjectsCover = styled.div`
  @media only screen and (max-width: 900px) {
    margin: 0 auto;
    max-width: 600px;
  }
`

const SideProjectsPreview = ({
  title,
  description,
  link,
  image,
  index,
  right,
}) => (
  <SideProjectsPreviewStyled>
    <SideProjectsCover right={right}>
      <Image fluid={image} alt={title} />
    </SideProjectsCover>
    <SideProjectsDescription>
      <H3>
0
{index + 1}
/
</H3>
      <H3>{title}</H3>
      <P>{description}</P>
      <ExternalLink key={title} href={link} target="_blank" rel="noopener">
        <Button>
          Visit website
          <IconArrow />
        </Button>
      </ExternalLink>
    </SideProjectsDescription>
  </SideProjectsPreviewStyled>
)

export default SideProjectsPreview
