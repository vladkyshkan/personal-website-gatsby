import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import ExternalLink from "./designSystem/ExternalLink"

const BookStyled = styled.div`
  width: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  @media only screen and (max-width: 48rem) {
    min-width: 140px;
    margin-left: 24px;

    &:nth-child(1) {
      margin-left: 5%;
    }

    &:nth-last-child(1) {
      margin-right: -5%;
    }

    &:hover {
      transform: none;
      transition: none;
    }

    @media only screen and (max-width: 31.25rem) {
      min-width: 96px;
      margin-left: 16px;
    }
  }
`

const BookCard = ({ title, url, imageData }) => (
  <BookStyled>
    <ExternalLink href={url} target="_blank" rel="noopener">
      <Image fluid={imageData} alt={title} />
    </ExternalLink>
  </BookStyled>
)

export default BookCard
