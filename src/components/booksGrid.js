import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BookCard from "./bookCard"

const BooksGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px 32px;
  margin-bottom: -16px;

  @media only screen and (max-width: 900px) {
    gap: 8px 24px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    width: 110%;
    margin-left: -5%;
  }
`

const BooksGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allBooksJson {
        edges {
          node {
            title
            url
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const books = data.allBooksJson.edges

  return (
    <BooksGridStyled>
      {books.map(({ node: book }) => {
        const { title, url } = book
        const imageData = book.image.childImageSharp.fluid

        return (
          <BookCard title={title} url={url} imageData={imageData} key={title} />
        )
      })}
    </BooksGridStyled>
  )
}

export default BooksGrid
