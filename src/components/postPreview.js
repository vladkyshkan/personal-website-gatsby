import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import P from "./designSystem/P"
import H4 from "./designSystem/H4"
import ExternalLink from "./designSystem/ExternalLink"
import { theme } from "./designSystem/theme"

const PostStyled = styled.div`
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: ${theme.dark};
    opacity: 0.5;
    margin-top: 12px;
  }

  h4 {
    color: ${theme.dark};
  }

  @media only screen and (max-width: 768px) {
    &:nth-child(1) {
      margin-top: -24px;
    }

    p {
      margin-top: 0;
    }

    div {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    &:nth-child(1) {
      margin-top: -8px;
    }
  }
`

const postPreview = ({ title, date, url, imageData }) => (
  <PostStyled>
    <ExternalLink href={url} target="_blank" rel="noopener">
      <Image fluid={imageData} alt={title} />
      <P>{date}</P>
      <H4>{title}</H4>
    </ExternalLink>
  </PostStyled>
)

export default postPreview
