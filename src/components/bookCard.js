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
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    min-width: 140px;
    margin-left: 16px;

    &:nth-child(1) {
      margin-left: 5%;
    }

    &:hover {
      transform: none;
      transition: none;
      opacity: 1;
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
