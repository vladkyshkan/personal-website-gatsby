import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import ExternalLink from "./designSystem/ExternalLink"

const BookStyled = styled.div`
  max-width: 168px;
  width: 100%;
  transform: scale(1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    opacity: 0.85;
  }
`

const BookCard = ({ title, url, imageData }) => (
  <BookStyled>
    <ExternalLink href={url} target="_blank">
      <Image fluid={imageData} alt={title} />
    </ExternalLink>
  </BookStyled>
)

export default BookCard
